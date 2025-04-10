/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  // basePath: "/car-catalog-next",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.API_URL}/:path*`,
  //     },
  //   ];
  // },
  images: {
    domains: ["localhost", "mclaren.scene7.com"],
  },
};

module.exports = nextConfig;
