import path from "path";

const resolveModule = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg'],
    alias: {
      static: path.resolve(__dirname, '../static'),
      "@mixins": path.resolve(__dirname, '../src/scss/mixins.scss'),
      "@fonts": path.resolve(__dirname, '../src/scss/fonts.scss'),
    }
  },
});

export default resolveModule;
