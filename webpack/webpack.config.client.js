const path = require('path');
const base = require('./webpack.config.base');

module.exports = Object.assign({}, { ...base }, {
  target: 'web',
  entry: {
    app: path.join(__dirname, '../app/index.jsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
});
