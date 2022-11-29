/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Apps',
    description: 'The official store for Kasm supported applications.',
    icon: '/img/logo.svg',
    listUrl: 'https://apps.kasmweb.com/list.json',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-apps',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
