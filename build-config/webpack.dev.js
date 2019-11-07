const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = webpackMerge(commonConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8000 
  },
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
});
