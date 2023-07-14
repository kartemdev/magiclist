import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";

const styleLoader = (): Configuration => ({
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
});

export default styleLoader;
