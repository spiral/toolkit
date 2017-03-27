'use strict';

const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const sourceMap = process.env.TEST || process.env.NODE_ENV !== 'production'
    ? [new webpack.SourceMapDevToolPlugin({filename: null, test: /\.js$/})]
    : [];

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        __TEST__: JSON.stringify(process.env.TEST || false),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
        }
    })
].concat(sourceMap);

const devPlugins = [
    new StyleLintPlugin({
        configFile: './.stylelintrc.json',
        files: ['resources/**/*.scss'],
        failOnError: false
    })
];

const prodPlugins = [
    new StyleLintPlugin({
        configFile: './.stylelintrc.json',
        files: ['resources/**/*.scss'],
        failOnError: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    })
];

module.exports = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
