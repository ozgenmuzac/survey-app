var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
      'main_app': './js/src/index.js'
    },

    output: {
      path: path.resolve('./js/bundles/'),
      filename: "[name]-[hash].js",
    },

    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }, // to transform JSX into JS
            { test: /\.less?$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                      {loader: 'css-loader',
                          options: {
                              modules: true,
                              localIdentName: '[name]--[local]--[hash:base64:5]'
                          }
                      },
                      "less-loader",
                  ],
              }),
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
    ],

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.less']
    },
};
