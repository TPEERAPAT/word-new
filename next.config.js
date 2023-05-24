/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  /**
   * To run yarn export, I need to put this config below
   * this shouldn't exist but I'm lazy to debug, So I unoptimized image
   * yall need to optimized all image and delete this line in the future
   * @nawakoon.8@gmail.com
   */
  images: { unoptimized: true },
  output: 'standalone',
});
