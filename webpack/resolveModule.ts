import path from "path";

const resolveModule = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg'],
    alias: {
      app: path.resolve(__dirname, '../src/app'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      "@mixins": path.resolve(__dirname, '../src/scss/mixins.scss'),
    }
  },
});

export default resolveModule;
