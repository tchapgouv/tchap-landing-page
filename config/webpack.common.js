const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const autoprefixer = require('autoprefixer')

module.exports = {

  // Shorthand to module inclusion
  resolve: {
    alias: {
      components: paths.src + '/components',
      styles: paths.res + '/css/components',
      images: paths.res + '/images',
      locales: paths.res + '/locales',
    }
  },

  watch: true,

  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.res,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store', paths.res + '/css/**/*'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Tchap landing page',
      favicon: paths.res + '/images/icons/favicon.ico',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [autoprefixer],
              },
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [{
          loader: 'file-loader',
          options: {
            name: '/assets/images/[hash].[ext]',
          }
        }]
      },

      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
    ],
  },
}
