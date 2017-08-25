const path = require("path");
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/app/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: path.join(__dirname, '/').replace(/\\/g, '/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
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
      onSuccess: (stdout) => {
        console.log(stdout);
      },
      restartFlow: false,
      failOnError: true,
      binaryPath: './node_modules/.bin/flow',
    }),
  ],
};

module.exports = config;
