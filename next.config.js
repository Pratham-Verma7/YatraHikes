/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any other image domains you'll use
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig 