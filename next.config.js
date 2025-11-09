/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/maolys',
  assetPrefix: '/maolys',
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Nécessaire pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;

