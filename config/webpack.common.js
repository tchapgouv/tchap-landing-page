const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {

  resolve: {
    alias: {
      components: paths.src + '/components',
      styles: paths.res + '/css/components',
      images: paths.res + '/images',
      locales: paths.res + '/locales',
    }
  },

  entry: [paths.src + '/index.js'],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.res,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store', paths.res + '/css/**/*', paths.res + '/images/*'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      favicon: paths.res + '/images/icons/favicon.ico',
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

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

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	    type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]'
        }
      },

      { test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]'
        }
      },
    ],
  },
}
