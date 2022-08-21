const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
} = require("@stylable/webpack-plugin");

const StylableOptimizer = require("@stylable/optimizer").StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  webpack: (config) => {
    applyWebpackConfigStylableExcludes(config);

    config.plugins.push(
      new StylableWebpackPlugin({
        filterAssets: () => false,

        filename: "static/css/stylable.[contenthash].css",

        optimizer: stylableOptimizer,
      })
    );

    return config;
  },
};
