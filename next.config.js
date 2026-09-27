/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Next.js non risolve /admin o /admin/ nel file statico
      // public/admin/index.html. Un redirect (invece di un rewrite) fa sì
      // che l'URL nel browser finisca proprio in "index.html", così Decap
      // CMS risolve config.yml come file "fratello" senza ambiguità sullo
      // slash finale.
      { source: "/admin", destination: "/admin/index.html", permanent: false },
      { source: "/admin/", destination: "/admin/index.html", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
