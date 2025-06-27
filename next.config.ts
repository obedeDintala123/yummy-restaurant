/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  images: {
    domains: ["images.pexels.com"]
  }
};

export default nextConfig;
