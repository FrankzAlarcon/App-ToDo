const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**@type{import('webpack').Configuration} */

const webpackConfiguration ={
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
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
  mode: 'development',
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.html/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
    compress: true
  }
}

module.exports = {
  ...webpackConfiguration
}