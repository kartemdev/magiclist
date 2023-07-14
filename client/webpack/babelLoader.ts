import { Configuration } from "webpack";

const babelLoader = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
});

export default babelLoader;
