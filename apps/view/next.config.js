/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { typedRoutes: true },
  images: {
    domains: ["unblast.com"],
  },
};

module.exports = nextConfig;
