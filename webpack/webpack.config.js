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
        //  file-loader outputs image files and returns paths to them instead of inlining. This technique works with other assets types, such as fonts
        // {
        //   loader: 'file-loader', 
        //   options: {
        //     query: {
        //       name:'assets/[name].[ext]'
        //     }
        //   }
        // },
        {
          loader: "url-loader", //The url-loader works like the file-loader, but can return a DataURL if the file is smaller than a byte limit. It emits your images as base64 strings within your JavaScript bundles. The process decreases the number of requests needed while growing the bundle size. It comes with a limit option that can be used to defer image generation to file-loader after a certain limit's reached. This way you can inline small files to your JavaScript bundles while generating separate files for the bigger ones.
          options: {
            limit: 8192, // setting a limit requires file-loader because that's the default fallback if it reaches over limit
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