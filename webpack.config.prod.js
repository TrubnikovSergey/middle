const path = require("path");
const { merge } = require("webpack-merge");
const configCommon = require("./webpack.config.common");

module.exports = merge(configCommon, {
  mode: "production",
  devtool: "source-map",
});
