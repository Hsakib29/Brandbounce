/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // next.config.mjs
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
};

export default nextConfig;