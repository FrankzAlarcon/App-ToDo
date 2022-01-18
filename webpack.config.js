const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

/**@type{import('webpack').Configuration} */
const webpackConfiguration = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@images": path.resolve(__dirname, 'src/images/'),
      "@hooks": path.resolve(__dirname, 'src/hooks/'),
      "@styles": path.resolve(__dirname, 'src/styles/'),
      "@containers": path.resolve(__dirname, 'src/containers/'),
      "@context": path.resolve(__dirname, 'src/context')
    }
  },
  mode:'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
}

module.exports = {
  ...webpackConfiguration
}