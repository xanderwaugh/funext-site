/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require("next-compose-plugins");

// const securityHeaders = [
//     { key: "X-DNS-Prefetch-Control", value: "on" },
//     { key: "X-XSS-Protection", value: "1; mode=block" },
//     { key: "X-Frame-Options", value: "SAMEORIGIN" },
//     { key: "X-Content-Type-Options", value: "nosniff" },
// ];

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // async headers() {
  //     [{ source: "/(.*)", headers: securityHeaders }];
  // },
};

module.exports = withPlugins([], nextConfig);
