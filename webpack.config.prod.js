const path = require("path");
const { merge } = require("webpack-merge");
const configCommon = require("./webpack.config.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// @ts-ignore
module.exports = merge(configCommon, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
