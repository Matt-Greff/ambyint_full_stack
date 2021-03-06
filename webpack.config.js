const webpack = require('webpack');
const path = require('path');
require('babel-core/register');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  entry: ['babel-polyfill', './client/src/index.jsx'],

  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'client', 'build', 'js'),
    filename: 'bundle.js',
  },

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.resolve(__dirname, 'client/src/public'),
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://localhost:8081',
    },
    historyApiFallback: true,
  },

  module: {
    rules: [
      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.(c|sa|sc)ss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },

      {
        test: /\.(jpeg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      // $: 'jquery',
      _: 'lodash',
    }),
  ],
};
