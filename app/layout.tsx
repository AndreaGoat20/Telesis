import type { Metadata } from "next";
import Script from "next/script";
import { Anton, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Telesis Magazine",
    template: "%s · Telesis Magazine",
  },
  description:
    "Telesis Magazine: le versioni estese degli articoli che condividiamo su Instagram (@magazine.telesis). Attualità, cultura e società raccontate da studenti.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body
        className={`${anton.variable} ${oswald.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Necessario perché i link di invito/reset di Netlify Identity,
            che atterrano sulla home con un token nell'URL, reindirizzino
            correttamente alla pagina /admin del CMS. */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", (user) => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/index.html";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
