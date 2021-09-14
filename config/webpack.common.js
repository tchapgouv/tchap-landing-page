const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
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
    clean: true,
  },

  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['js/*.LICENSE.txt'],
    }),

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
            ignore: ['*.DS_Store', paths.res + '/css/**/*', paths.res + '/images/**/*', paths.res + '/locales/**/*'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),

    new FaviconsWebpackPlugin({
      logo: paths.res + '/images/icons/tchap-logo.svg',
      prefix: 'assets/images/',
      favicons: {
        appName: 'tchap-landing-page',
        appDescription: 'Tchap landing page',
        developerName: "Yoshin <l.mora@outlook.fr>",
        developerURL: null,
        lang: "fr-FR",
        theme_color: "#110091",
        icons: {
          coast: false,
          yandex: false
        }
      }
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

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	    type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]'
        }
      },
    ],
  },
}
