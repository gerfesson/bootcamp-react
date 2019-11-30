const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
