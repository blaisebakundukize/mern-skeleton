const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

// Webpack configuration to bundle and hot-load React code during development.
const config = {
  name: "browser",
  mode: "development", // Mode sets process.env.NODE_ENV to the given value and tells webpack to use its built-in optimizations accordingly.
  devtool: "eval-source-map", // devtool specifies how source maps are generated, if at all. Generally, a source map provides a way of mapping code within a compressed file back to its original position in a source file to aid debugging.
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ], // Specifies the entry file where Webpack starts bundling, in this case with the main.js file in the client folder.
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  }, // Specifies the output path for the bundled code, in this case set to dist/bundle.js
  module: {
    // Sets the regex rule for the file extension to be used for transpilation, and the folders to be excluded. The transpilation tool to be used here is babel-loader.
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enables hot module replacement for react-hot-loader.
    new webpack.NoEmitOnErrorsPlugin(), // Allows skipping emitting when there are compile errors
  ],
  resolve: {
    // Webpack alias to point react-dom references to the @hot-loader/react-dom version.
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

module.exports = config;
