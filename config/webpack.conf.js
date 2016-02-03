var path = require('path');
var pkg = require('../package.json');
var webpack = require('webpack');

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true,
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: {
        "sf.input": './src/input/index.js',  // webpack workaround issue #300
        "sf.input.min": './src/input/index.js'  // webpack workaround issue #300
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '..', 'resources/scripts/spiral/')
    },
    resolve: {
        alias: {
            'sf': path.resolve(__dirname, '..', 'node_modules/sf/src/sf')
        },
        extensions: ['', '.js']
    },
    resolveLoader: {
        root: path.resolve(__dirname, '..', 'node_modules')
    },
    module: {
        loaders: [
            {test: /\.js?$/, loader: 'babel?presets[]=es2015&plugins[]=transform-runtime'}
        ],
        noParse: []
    },
    devtool: 'source-map',
    plugins: [uglifyJsPlugin],
    externals: {
        "sf": "sf"
    }
};
