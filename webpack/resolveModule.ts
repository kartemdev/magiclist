import path from "path";

const resolveModule = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg'],
    alias: {
      app: path.resolve(__dirname, '../src/app'),
      assets: path.resolve(__dirname, '../src/shared/assets'),
      modules: path.resolve(__dirname, '../src/modules'),
      models: path.resolve(__dirname, '../src/models'),
      pages: path.resolve(__dirname, '../src/pages'),
      scss: path.resolve(__dirname, '../src/scss'),
      shared: path.resolve(__dirname, '../src/shared'),
      "@mixins": path.resolve(__dirname, '../src/scss/mixins.scss'),
    }
  },
});

export default resolveModule;
