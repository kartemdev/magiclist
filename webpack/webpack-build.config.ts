import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from 'webpack';

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
    devServer: {
      static: {
        directory: path.resolve(__dirname, '../public'),
      },
      port: 5000,
      host: '127.0.0.1',
      hot: true,
    },
    plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        favicon: path.resolve(__dirname, '../public', 'favicon.ico')
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
