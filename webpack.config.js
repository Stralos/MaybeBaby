/* eslint no-console: 0 */
const path = require('path');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

const base = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      /*
      {
        enforce: 'pre',
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: false,
        },
      },
      */
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new FlowStatusWebpackPlugin({
      onError: (stdout) => {
        console.log(stdout);
      },
      restartFlow: false,
      failOnError: true,
      binaryPath: './node_modules/.bin/flow',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

const serverConfig = {
  target: 'node',
  entry: path.join(__dirname, '/server/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'server-bundle.js',
  },
  externals: [webpackNodeExternals()],
};

const clientConfig = {
  target: 'web',
  entry: path.join(__dirname, '/app/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'bundle.js',
  },
};

module.exports = [
  Object.assign({}, base, serverConfig),
  Object.assign({}, base, clientConfig),
];
