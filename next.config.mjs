/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow ALL domains (remove after testing)
      }
    ]
  },
  // Enable React Strict Mode (recommended)
  reactStrictMode: true,
 
  // Bundle optimization configurations
  experimental: {
    // Optimize package imports for better tree shaking
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@heroicons/react',
      'react-icons',
      // Add other heavy libraries you're using
    ],
    // Enable CSS optimization
    optimizeCss: true,
  },
 
  // Webpack optimization for better chunk splitting
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer && !dev) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
         
          // Split React into its own chunk
          react: {
            name: 'react',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 30,
            enforce: true,
          },
         
          // Split UI/Animation libraries
          ui: {
            name: 'ui-libs',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](framer-motion|lucide-react|@heroicons|react-icons)[\\/]/,
            priority: 25,
            enforce: true,
          },
         
          // Split utility libraries
          utils: {
            name: 'utils',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](lodash|date-fns|clsx|classnames)[\\/]/,
            priority: 20,
            enforce: true,
          },
         
          // Other vendor libraries
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            minChunks: 1,
            maxSize: 200000, // Split vendor chunks if they exceed 200KB
          },
         
          // Common components used across pages
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
            maxSize: 100000, // Split common chunks if they exceed 100KB
          },
        },
      };
    }
   
    // Tree shaking improvements - Remove the conflicting usedExports setting
    // config.optimization.usedExports = true; // REMOVED - This conflicts with cacheUnaffected
    
    // Keep sideEffects optimization as it doesn't conflict
    config.optimization.sideEffects = false;
   
    return config;
  },
 
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
 
  // Output optimization
  output: 'standalone', // Optimize for deployment
 
  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
};

export default nextConfig;