const {join} = require("node:path");
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Resolve modules and aliases
    config.resolve.alias['@'] = join(__dirname, '.');

    // Important: return the modified config
    return config;
  },
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig);
