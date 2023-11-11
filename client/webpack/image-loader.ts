import { Configuration } from "webpack";
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

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
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ]
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 80,
              },
            },

          }
        }
      })
    ]
  }
});

export default imageLoader;
