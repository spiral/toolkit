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
        "sf.input.min": './src/input/index.js',  // webpack workaround issue #300
        "sf.fileinput": './src/fileinput/index.js',  // webpack workaround issue #300
        "sf.fileinput.min": './src/fileinput/index.js',  // webpack workaround issue #300
        "sf.date.min": './src/date/index.js',  // webpack workaround issue #300
        "sf.date": './src/date/index.js',  // webpack workaround issue #300
        "sf.datetime.min": './src/datetime/index.js',  // webpack workaround issue #300
        "sf.datetime": './src/datetime/index.js'  // webpack workaround issue #300
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
            {
                test: /\.js?$/,
                loader: 'babel?presets[]=es2015&plugins[]=transform-runtime',
                exclude: /node_modules/
            }
        ],
        noParse: []
    },
    devtool: 'source-map',
    plugins: [uglifyJsPlugin],
    externals: {
        "sf": "sf"
    }
};
