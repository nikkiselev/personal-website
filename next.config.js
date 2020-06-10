const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  poweredByHeader: false,
  experimental: {
    modern: true,
    async rewrites() {
      return [
        { source: '/sitemap.xml', destination: '/api/sitemap' },
        { source: '/robots.txt', destination: '/api/robots' },
      ]
    },
    catchAllRouting: true,
  },

})

module.exports = withBundleAnalyzer({})
