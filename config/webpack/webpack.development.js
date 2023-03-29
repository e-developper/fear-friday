const path = require('path');

const common = require('./webpack.common')

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve('public')
    },
    compress: true,
    port: 8000
  }
};
