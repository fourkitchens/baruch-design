/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/storybook/:path*',
        destination: '/storybook/:path*',
      },
    ];
  },
};

export default nextConfig;
