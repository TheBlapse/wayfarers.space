/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Red4DJZphV",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/WayfarersSpace",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
