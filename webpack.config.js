"use strict";
var path = require("path");
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');


var config = {
  devtool: "eval-source-map",
  entry: path.join(__dirname, "/app/index.js"),
  output: {
    path: path.join(__dirname, "/dist/"),
    publicPath: path.join(__dirname, "/").replace(/\\/g, "/"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new FlowStatusWebpackPlugin({
      onError: function(stdout) {
        console.log(stdout)
      },
      onSuccess: function(stdout){
        console.log(stdout)
      },
      restartFlow: false,
      failOnError: true
    })
  ]

};

module.exports = config;
//https://www.npmjs.com/package/flow-babel-webpack-plugin