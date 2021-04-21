const composePlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

function esbuildLoader(config, options) {
  const tsLoader = config.module.rules.find(
    rule => rule.test && rule.test.test('.ts')
  )

  if (tsLoader && tsLoader.use) {
    if (tsLoader.use.length > 0) {
      tsLoader.use.forEach(e => {
        e.loader = 'esbuild-loader'
        e.options = options
      })
    } else {
      tsLoader.use.loader = 'esbuild-loader'
      tsLoader.use.options = options
    }
  }
}

const nextConfig =
  process.env.EXPORT !== 'true'
    ? {
        webpack(config, {webpack, dev, isServer}) {
          config.plugins.push(
            new webpack.ProvidePlugin({
              React: 'react',
            })
          )
          // use esbuild in development mode for faster HMR
          if (dev) {
            esbuildLoader(config, {
              loader: 'tsx',
              target: 'es2017',
            })
          }

          config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            exclude: config.exclude,
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: config.inlineImageLimit,
                  fallback: require.resolve('file-loader'),
                  publicPath: `${config.assetPrefix}/_next/static/images/`,
                  outputPath: `${isServer ? '../' : ''}static/images/`,
                  name: '[name]-[hash].[ext]',
                  esModule: config.esModule || false,
                },
              },
            ],
          })

          config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
          })

          return config
        },
      }
    : {}

module.exports = composePlugins(
  [
    withOffline,
    // withPWA({
    //   pwa: {
    //     dest: 'public',
    //     runtimeCaching,
    //   },
    // }),
  ],
  nextConfig
)
