import { Configuration } from "webpack";

const imageLoader = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          '@svgr/webpack'
        ],
      },
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  },
});

export default imageLoader;
