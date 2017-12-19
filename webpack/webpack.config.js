const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
SWPrecacheWebpackPluginConfig = new SWPrecacheWebpackPlugin({
  cacheIde: 'my-portfolio',
  filename: 'my-service-worker.js',
  minify: true,
  verbose: true,
})


module.exports = {
  entry: path.join(__dirname, '../src', 'index.jsx'),
  output: { 
    path: path.resolve(__dirname, '../', 'public'),
    filename: 'bundle.js',
    },
  module : {
    rules: [
        {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      },
      {
      test: /\.css$/,
      loader: ['style-loader','css-loader']
      }
    ]  
  },
  plugins: [
    HtmlWebpackPluginConfig,

  ],
}