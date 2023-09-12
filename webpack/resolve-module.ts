import path from "path";

const resolveModule = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg'],
    alias: {
      assets: path.resolve(__dirname, '../src/shared/assets'),
      '~app': path.resolve(__dirname, '../src/app'),
      '~pages': path.resolve(__dirname, '../src/pages'),
      '~modules': path.resolve(__dirname, '../src/modules'),
      '~services': path.resolve(__dirname, '../src/services'),
      '~components': path.resolve(__dirname, '../src/components'),
      '~shared': path.resolve(__dirname, '../src/shared'),
      "~mixins": path.resolve(__dirname, '../src/shared/scss/mixins.scss'),
      '~langs': path.resolve(__dirname, '../langs'),
    }
  },
});

export default resolveModule;
