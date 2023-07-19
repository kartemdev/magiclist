import { Configuration } from "webpack";

const babelLoader = (isProd: boolean): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: isProd,
            }
          }
        ]
      }
    ]
  },
});

export default babelLoader;
