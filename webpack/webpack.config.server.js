const base = require('./webpack.config.base');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Object.assign({}, base, {
  target: 'node',
  entry: path.join(__dirname, '../server/index.js'),
  output: {
    path: path.join(__dirname, '../server/build/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'server-bundle.js',
  },
  plugins: [
    ...base.plugins,
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../server/assets/'),
      to: path.join(__dirname, '../dist/'),
    }]),
  ],
  externals: [webpackNodeExternals()],
});
