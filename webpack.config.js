import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const __dirname = path.resolve();

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      minify: {
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        loader: "babel-loader",
        test: /\.[t]sx?$/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
};

export default config;
