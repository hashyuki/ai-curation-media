/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // photo-acの外部ホストを追加
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumb.photo-ac.com'
      }
    ]
  }
}

export default nextConfig
