import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
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
        className={`${fraunces.variable} ${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
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
