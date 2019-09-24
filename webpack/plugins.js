// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const sourceMap = process.env.TEST || process.env.NODE_ENV !== 'production'
  ? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.js$/ })]
  : [];

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.LoaderOptionsPlugin({
    debug: true,
  }),
  // eslint-disable-next-line no-useless-escape
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale/, /en/),
].concat(sourceMap);

const devPlugins = [];

const prodPlugins = [];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
