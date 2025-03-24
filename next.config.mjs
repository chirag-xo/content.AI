/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for development
    images: {
      domains: ['localhost', 'cdn-icons-png.flaticon.com'], // Allowed image domains
    },
    env: {
      API_URL: process.env.API_URL, // Example environment variable
    },
    async rewrites() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
        },
      ];
    },
  };
  
  export default nextConfig;