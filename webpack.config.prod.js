import path from "path";
import configBase, { __dirname } from "./webpack.config.js";

const config = {
  ...configBase,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
};

export default config;
