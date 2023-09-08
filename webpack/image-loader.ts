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
});

export default imageLoader;
