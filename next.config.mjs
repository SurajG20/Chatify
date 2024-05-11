/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xsgames.co'
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com'
      }
    ]
  }
};
export default nextConfig;
