import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
        test: /\.((sa|sc|c)ss)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  
});

export default styleLoader;
