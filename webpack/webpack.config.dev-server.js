const webpack = require('webpack');
const client = require('./webpack.config.client');

module.exports = Object.assign({}, { ...client }, {
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: { '**': 'http://localhost:3009' },
  },
  plugins: [
    ...client.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
