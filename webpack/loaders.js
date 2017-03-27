'use strict';

exports.eslint = {
  enforce: 'pre',
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
};

exports.css = {
  test: /\.css$/,
  loader: 'style-loader!css-loader?-url&sourceMap'
};

exports.sass = {
  test: /\.scss$/,
  loader: 'style-loader!css-loader?-url&sourceMap!sass-loader?sourceMap'
};

exports.js = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/
  };
}
