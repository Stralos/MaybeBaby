/* eslint no-console: 0 */
const path = require('path');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const base = {
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './app/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: { '**': 'http://localhost:3009' },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          publicPath: '/',
        },
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

const serverConfig = {
  target: 'node',
  entry: path.join(__dirname, '/server/index.js'),
  output: {
    path: path.join(__dirname, '/server/build/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'server-bundle.js',
  },
  plugins: [
    ...base.plugins,
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/server/assets/'),
        to: path.join(__dirname, '/dist/'),
      },
    ]),
  ],
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

module.exports = base;
