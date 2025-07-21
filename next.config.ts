import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Add basePath only when building for GitHub Pages deployment
  basePath: process.env.GITHUB_ACTIONS ? '/modern-frontend-demo' : '',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    typedRoutes: false,
  }
};

export default nextConfig;
