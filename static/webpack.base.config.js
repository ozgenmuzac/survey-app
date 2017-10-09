var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

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
        loaders: [],
    },

    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.less']
    },
}
