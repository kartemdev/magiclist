import path from "path";

const resolveModule = () => ({
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.svg'],
    alias: {
      static: path.resolve(__dirname, '../static'),
    }
  },
});

export default resolveModule;
