import path from "path";
import { Env } from "./types";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from 'webpack';

const buildConfig = (env: Env): Configuration => {
  const isProd = env.production;
  const mode = env.production ? "production" : "development";

  return {
    mode,
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: isProd ? '[name].[fullhash].bundle.js' : '[name].bundle.js'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, '../public'),
      },
      port: 8000,
      host: '127.0.0.1',
      hot: true,
    },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html')
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  }
};

export default buildConfig;
