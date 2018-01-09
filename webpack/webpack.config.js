const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body' //inject scripts before body closing tag
});


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
      use: [
        // {
        //   loader: 'file-loader',
        //   options: {
        //     query: {
        //       name:'assets/[name].[ext]'
        //     }
        //   }
        // },
        {
          loader: "url-loader",
          options: {
            limit: 25000,
            }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            query: {
              pngquant: {
                quality: '65-90',
                speed: 4,
                input: Buffer
              },
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        }
      ]
    }
    ]  
  },
  // devServer: { historyApiFallback: true },
  devtool: 'source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    // SWPrecacheWebpackPluginConfig
  ],
}