var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: "./src/cimsvg.js",
  optimization: { "minimize": false },
  mode: "development",
  output: {
    path: __dirname + "/html",
        filename: "cimsvg.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
};
