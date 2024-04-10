import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { Env } from './types';
import resolveModule from './resolve-module';
import babelLoader from './babel-loader';
import styleLoader from './style-loader';
import imageLoader from './image-loader';
import buildConfig from './webpack-build.config';
import devServer from './dev-server';

const common = (isProd: boolean) =>
  merge([
    {
      entry: {
        index: path.resolve(__dirname, '../src/app/index.tsx'),
      },
    },
    resolveModule(),
    babelLoader(isProd),
    styleLoader(isProd),
    imageLoader(),
  ]);

const config = (env: Env): Configuration | null => {
  if (env.production) {
   return merge([common(env.production), buildConfig(env.production, env)]);
  }
  if (env.development) {
   return merge([common(!env.development), devServer(), buildConfig(!env.development, env)]);
  }

  return null;
}

export default config;
