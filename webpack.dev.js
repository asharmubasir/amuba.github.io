const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var path = require('path');

module.exports = merge(common, {
    mode: "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9001
    }
});
