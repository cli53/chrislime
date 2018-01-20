const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const UglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: true,
});
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Without ExtractTextPlugin, The current solution doesn't allow to cache CSS. You can also get a Flash of Unstyled Content (FOUC). FOUC happens because the browser takes a while to load JavaScript and the styles would be applied only then. Separating CSS to a file of its own avoids the problem by letting the browser to manage it separately.
// It moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
const ExtractTextPluginConfig = new ExtractTextPlugin('styles.css');
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
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
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
  devServer: { historyApiFallback: true },
  // Any eval is for dev env
  // Any cheap or inline is for special cases like 3rd party tools
  // Any
  // devtool: 'nosources-source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    UglifyJsPluginConfig,
    // SWPrecacheWebpackPluginConfig
  ],
}

// [{
//   loader: "style-loader" // creates style nodes from JS strings
// }, {
//   loader: "css-loader" // translates CSS into CommonJS
// }, {
//   loader: "sass-loader" // compiles Sass to CSS
// }]