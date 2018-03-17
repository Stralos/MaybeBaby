const base = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');

module.exports = Object.assign({}, base, {
  target: 'web',
  entry: path.join(__dirname, '../app/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '../dist',
    hot: true,
    proxy: { '**': 'http://localhost:3009' },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
