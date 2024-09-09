import path from 'path';
import { Configuration } from 'webpack';

const babelConfigFile = path.resolve(__dirname, '../config/babel.config.mjs');

const babelLoader = (isProd: boolean): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: babelConfigFile,
          },
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: babelConfigFile,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: isProd,
            },
          },
        ],
      },
    ],
  },
});

export default babelLoader;
