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

    plugins: [
    ],

    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }, // to transform JSX into JS
            { test: /\.less?$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true ,localIdentName: '[name]--[local]--[hash:base64:5]'} },
                    "less-loader",
                ]
            }
        ],
    },

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.less']
    },
};
