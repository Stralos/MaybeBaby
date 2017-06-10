"use strict";

var path = require("path");


var config = {
  devtool: "eval-source-map",
  entry: path.join(__dirname, "/app/index.jsx"),
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
  }
};

module.exports = config;
//https://www.npmjs.com/package/flow-babel-webpack-plugin