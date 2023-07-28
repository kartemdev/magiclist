import path from "path";
import { Configuration } from "webpack";
import 'webpack-dev-server';

const devServer = (): Configuration => ({
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../public'),
    },
    port: 8000,
    host: '127.0.0.1',
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: false,
      },
    },
    historyApiFallback: true,
  },
});

export default devServer;
