import path from 'path';
import webpack, { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FontPreloadPlugin from 'webpack-font-preload-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { Env } from './types';

const buildConfig = (isProd: boolean, env: Env): Configuration => {
  const mode = isProd ? 'production' : 'development';

  return {
    mode,
    devtool: !isProd && 'eval-cheap-module-source-map',
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: isProd ? '[name].[fullhash].bundle.js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[fullhash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new FontPreloadPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        favicon: path.resolve(__dirname, '../public', 'favicon.ico'),
      }),
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(env.API_HOST),
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      runtimeChunk: isProd && { name: 'runtime' },
      removeAvailableModules: isProd,
      removeEmptyChunks: isProd,
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: true,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: isProd && {
        minSize: 17000,
        minRemainingSize: 0,
        minChunks: 1,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor_react',
            chunks: 'all',
            priority: 10,
          },
          redux: {
            test: /[\\/]node_modules[\\/](redux|react-redux|@reduxjs\/toolkit)[\\/]/,
            name: 'vendor_redux',
            chunks: 'all',
            priority: 10,
          },
          reactRouter: {
            test: /[\\/]node_modules[\\/](react-router-dom)[\\/]/,
            name: 'vendor_react_router_dom',
            chunks: 'all',
            priority: 10,
          },
          reactHookForm: {
            test: /[\\/]node_modules[\\/](react-hook-form|@hookform\/resolvers|yup)[\\/]/,
            name: 'vendor_react_hook_form',
            chunks: 'all',
            priority: 10,
          },
          tanstack: {
            test: /[\\/]node_modules[\\/](@tanstack\/react-table)[\\/]/,
            name: 'vendor_tanstack',
            chunks: 'all',
            priority: 10,
          },
          i18next: {
            test: /[\\/]node_modules[\\/](i18next|react-i18next)[\\/]/,
            name: 'vendor_i18next',
            chunks: 'all',
            priority: 10,
          },
          common: {
            test: /[\\/]node_modules[\\/]/,
            priority: -5,
            reuseExistingChunk: true,
            chunks: 'initial',
            name: 'vendor_common',
            minSize: 0,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          defaultVendors: false,
        },
      },
    },
  };
};

export default buildConfig;
