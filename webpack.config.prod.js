import path from "path";
import configBase from "./webpack.config.js";

const __dirname = path.resolve();

const config = {
  ...configBase,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
};

export default config;
