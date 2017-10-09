var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.base.config.js')

config.output.publicPath = 'http://localhost:3000/static/bundles/';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
]);

// Add a loader for JS files with react-hot enabled
config.module.loaders = [
    { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' }, // to transform JSX into JS
    { test: /\.less?$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
    // { test: /\.less?$/, use: [{
    //     loader: "style-loader" // creates style nodes from JS strings
    // }, {
    //     loader: "css-loader" // translates CSS into CommonJS
    // }, {
    //     loader: "less-loader" // compiles Less to CSS
    // }] }
];

// { test: /\.less?$/, use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "less-loader" // compiles Less to CSS
        //     }] }

module.exports = config;
