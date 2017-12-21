const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body' //inject scripts before body closing tag
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
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
    ]  
  },
  devServer: { historyApiFallback: true },
  devtool: 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    SWPrecacheWebpackPluginConfig
  ],
}