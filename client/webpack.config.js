const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    port: 8000,
    host: '127.0.0.1',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}
