import path from "path";
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const webpack = require('webpack');

const buildConfig = (isProd: boolean): Configuration => {
  const mode = isProd ? "production" : "development";

  return {
    mode,
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: isProd ? '[name].[fullhash].bundle.js' : '[name].bundle.js',
      publicPath: '/',
      clean: true,
    },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        favicon: path.resolve(__dirname, '../public', 'favicon.ico')
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      runtimeChunk: 'single'
    },
  }
};

export default buildConfig;
