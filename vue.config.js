const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  devServer: {
    port: 8080
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 4096
        })
      );
    }
  }
};
