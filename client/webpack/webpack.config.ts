import path from 'path';
import { merge } from 'webpack-merge';
import resolveModule from './resolveModule';
import babelLoader from './babelLoader';
import styleLoader from './styleLoader';
import imageLoader from './imageLoader';
import buildConfig from './webpack-build.config';

import { Configuration } from 'webpack';
import { Env } from './types';
import devServer from './devServer';

const common = () =>
  merge([
    {
      entry: {
        index: path.resolve(__dirname, '../src/index.tsx'),
      },
    },
    resolveModule(),
    babelLoader(),
    styleLoader(),
    imageLoader(),
  ]);

const config = (env: Env): Configuration | null => {
  if (env.production) {
   return merge([common(), buildConfig(env)]);
  }
  if (env.development) {
   return merge([common(), devServer(), buildConfig(env)]);
  }

  return null;
}

export default config;
