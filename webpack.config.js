var AureliaWebPackPlugin = require('aurelia-webpack-plugin');

var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': [],
        'aurelia': [
            'aurelia-bootstrapper-webpack',
            'aurelia-polyfills',
            'aurelia-pal',
            'aurelia-pal-browser',
            'aurelia-binding',
            'aurelia-dependency-injection',
            'aurelia-event-aggregator',
            'aurelia-framework',
            'aurelia-history',
            'aurelia-history-browser',
            'aurelia-loader',
            'aurelia-loader-webpack',
            'aurelia-logging',
            'aurelia-logging-console',
            'aurelia-metadata',
            'aurelia-path',
            'aurelia-route-recognizer',
            'aurelia-router',
            'aurelia-task-queue',
            'aurelia-templating',
            'aurelia-templating-binding',
            'aurelia-templating-router',
            'aurelia-templating-resources'
        ]
    },
    output: {
        path: './build',
        filename: 'scripts/[name].bundle.js',
        sourceMapFilename: 'scripts/[name].bundle.js.map'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.html$/, loader:'html', exclude: path.resolve('src/index.html') }
        ]
    },
    plugins: [
        new AureliaWebPackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: ['aurelia']}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunksSortMode: 'dependency'
        }),
    ],
    devServer: {
        port: 3000
    }
};

