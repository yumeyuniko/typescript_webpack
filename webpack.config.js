module.exports = {
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js', // [name]はentryで記述した名前（この設定ならbundle）
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
