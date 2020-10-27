const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
      publicPath: '/project-name/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            } 
          ]
        }
      ]
    }
});
