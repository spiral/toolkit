'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');


module.exports = {

  entry: {
      index: ['./js-source/index.js']
  },

  output: {
    path: path.join(__dirname, 'resources', 'scripts'),
    filename: 'sf.toolkit.js',
    publicPath: '/',
    sourceMapFilename: 'sf.toolkit.js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: [
      '.js',
      '.json',
      '.webpack.js',
      '.web.js',
      '.less',
      '.css'
    ]
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: {index: '/'}
  },

  module: {
    rules: [
      loaders.eslint,

      loaders.js,
      loaders.css,
      loaders.less,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf
    ]
  },
  externals: {
    "sf": {
      commonjs: "sf-core",
      commonjs2: "sf-core",
      root: "sf"
    }
  }
};
