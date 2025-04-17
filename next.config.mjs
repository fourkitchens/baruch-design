/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/storybook/:path*',
        destination: '/storybook-static/:path*',
      },
    ];
  },
};

export default nextConfig;
