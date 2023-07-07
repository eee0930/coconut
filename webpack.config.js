import MiniCssExtractPlugin, {
  loader as _loader,
} from "mini-css-extract-plugin";
import { resolve } from "path";

const BASE_JS = "../client/";

export const entry = {
  main: BASE_JS + "main.js",
};
export const plugins = [
  new MiniCssExtractPlugin({
    filename: "css/styles.css",
  }),
];
export const output = {
  filename: "js/[name].js",
  path: resolve(__dirname, "assets"),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },
    },
    {
      test: /\.scss$/,
      use: [_loader, "css-loader", "sass-loader"],
    },
  ],
};
