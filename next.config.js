/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: 'api-key',
  },
  presets: ["next/babel"]
}

module.exports = nextConfig
