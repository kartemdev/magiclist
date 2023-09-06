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
   return merge([common(env.production), buildConfig(env.production)]);
  }
  if (env.development) {
   return merge([common(!env.development), devServer(), buildConfig(!env.development)]);
  }

  return null;
}

export default config;
