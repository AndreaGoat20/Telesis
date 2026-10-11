import { NextRequest, NextResponse } from "next/server";

function renderMessagePage(status: "success" | "error", payload: object) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const cookieState = request.cookies.get("decap_oauth_state")?.value;

  if (!clientId || !clientSecret) {
    return new NextResponse("Missing GitHub OAuth env vars", { status: 500 });
  }

  if (!code || !state || state !== cookieState) {
    return new NextResponse(
      renderMessagePage("error", { message: "Invalid OAuth state" }),
      { status: 400, headers: { "Content-Type": "text/html" } },
    );
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        state,
      }),
    },
  );

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    return new NextResponse(
      renderMessagePage("error", {
        message: tokenData.error_description || "GitHub token exchange failed",
      }),
      { status: 400, headers: { "Content-Type": "text/html" } },
    );
  }

  const html = renderMessagePage("success", {
    token: tokenData.access_token,
    provider: "github",
  });
  const response = new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
  response.cookies.delete("decap_oauth_state");
  return response;
}
