const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle-[id].js',
    path: path.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html')
    })
  ],
  devServer: {
    static: {
      directory: path.resolve('public')
    },
    compress: true,
    port: 8000
  }
};
