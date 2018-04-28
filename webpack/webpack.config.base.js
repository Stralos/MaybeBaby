/* eslint no-console: 0 */
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const webpack = require('webpack');

const base = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name]-[hash].[ext]',
        publicPath: '/',
      },
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
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

module.exports = base;
