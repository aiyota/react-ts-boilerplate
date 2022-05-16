import path from "path";
import configBase from "./webpack.config.js";

const __dirname = path.resolve();

const config = {
  ...configBase,
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: 9000,
  },
};

export default config;