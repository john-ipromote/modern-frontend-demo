import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use export mode for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  // Add basePath only when building for GitHub Pages deployment (production only)
  basePath: process.env.GITHUB_ACTIONS && process.env.NODE_ENV === 'production' ? '/modern-frontend-demo' : '',
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
