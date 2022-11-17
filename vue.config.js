const StyleLintPlugin = require('stylelint-webpack-plugin')
const DeadCodePlugin = require('webpack-deadcode-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,

  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api/': { target: process.env.API_BASE_URL }
    },
    hot: true
  },

  configureWebpack: {
    // Fast source maps in dev
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
      }),
      new DeadCodePlugin({
        patterns: [
          'src/**/*.*'
        ]
      })
    ],
    resolve: {
      alias: {
        // Alias @ to /src folder for ES/TS imports
        '@': resolve('/src'),
        '@src': resolve('src/'),
        '@api': resolve('src/api'),
        '@assets': resolve('src/assets/'),
        '@components': resolve('src/components/'),
        '@router': resolve('src/router'),
        // '@layouts': resolve('src/router/layouts/'),
        '@pages': resolve('src/pages/'),
        '@utils': resolve('src/utils/'),
        '@store': resolve('src/store')
      }
    }
  },

  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      sass: {
        implementation: require('sass') // This line must in sass option
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/sass/*.scss')]
    }
  }
}
