/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
        },
      ],
    },
}

module.exports = nextConfig
