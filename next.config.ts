import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/case-studies/:path*',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/:slug(\\w+.*)',
        destination: '/work',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
