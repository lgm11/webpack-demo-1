const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',//输入路径，默认src/index.js
    output: {
      filename: '[name].[contenthash].js',//输出的文件名，可改
    },
  };