import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable file-system based caching (default in Next.js 13+)
  output: "standalone",
  swcMinify: true,
};

export default nextConfig;