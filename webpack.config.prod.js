const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
      },
    entry: './src/index.js',//输入路径，默认src/index.js
    output: {
      filename: '[name].[contenthash].js',//输出的文件名，可改
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title:'写代码啦',//生成的html的title
            filename: 'test.html',//生成的文件名
            template: 'src/assets/index.html'//需要打包的文件路径
        }
    ),
    new MiniCssExtractPlugin( {
        filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'}
      ),
    ],
    
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/i,
            loader: [
              // compiles Less to CSS
              "style-loader",
              "css-loader",
              "less-loader",
            ],
          },
          {
            test: /\.styl$/i,
            loader: [
              // compiles Less to CSS
              "style-loader",
              "css-loader",
              "stylus-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
  };

 