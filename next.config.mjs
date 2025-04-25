/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Helpful for Cloudflare-hosted assets
  },
  trailingSlash: true,
};

export default nextConfig;
