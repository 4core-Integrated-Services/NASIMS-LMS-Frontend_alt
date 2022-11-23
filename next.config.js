/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirect() {
    return [
      {
        destination: "/instructor",
        permanent: true,
        source: "/instructor-details",
      },
    ];
  },
};

module.exports = nextConfig;
