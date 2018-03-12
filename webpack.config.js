var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: "./src/cimsvg.js",
  optimization: { "minimize": true },
  mode: "production",
  output: {
    path: __dirname + "/html",
        filename: "cimsvg.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
};
