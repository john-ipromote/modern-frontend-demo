import type { NextConfig } from "next";

// Function to determine basePath based on environment
const getBasePath = () => {
  // If not in GitHub Actions or not production, no basePath
  if (!process.env.GITHUB_ACTIONS || process.env.NODE_ENV !== 'production') {
    return '';
  }
  
  // If we have a custom basePath from environment (for feature branches)
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  // Default basePath for main branch
  return '/modern-frontend-demo';
};

const nextConfig: NextConfig = {
  // Only use export mode for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  // Dynamic basePath based on environment
  basePath: getBasePath(),
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
