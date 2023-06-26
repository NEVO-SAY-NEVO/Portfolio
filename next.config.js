/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* additional configuration options here */
})
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
