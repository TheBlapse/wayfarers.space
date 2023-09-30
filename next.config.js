/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: "/x",
        destination: "https://x.com/WayfarersSpace",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/theblapse/wayfarers.space",
        permanent: false,
      },
      {
        source: "/apply",
        destination: "https://tally.so/r/n07dVB",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
