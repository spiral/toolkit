const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',

  entry: {},

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  resolve: {
    extensions: [
      '.js',
      '.json',
      '.web.js',
      '.less',
      '.css',
    ],
  },

  plugins: [],

  module: {
    rules: [],
  },

  devServer: {
    historyApiFallback: { index: '/' },
  },
};
