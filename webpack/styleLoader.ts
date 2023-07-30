import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration } from "webpack";

const styleLoader = (isProd: boolean): Configuration => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  
});

export default styleLoader;
