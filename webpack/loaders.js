const path = require('path');
const { readdirSync } = require('fs');

const makeIncludeFunction = () => {
  // console.log(path.join(__dirname,'..', '/packages'));
  const allPackages = readdirSync(path.join(__dirname, '..', '/packages'));
  // console.log(allPackages);
  return (p) => p.indexOf('@spiral-toolkit') >= 0
        || !!allPackages.find((pack) => p.indexOf(`packages${path.sep}${pack}`) >= 0);
};

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    use: [
      'url',
    ],
    exclude: /node_modules/,
  };
}

exports.jsmap = {
  test: /\.js$/,
  use: [
    'source-map-loader',
  ],
  include: makeIncludeFunction(),
  enforce: 'pre',
};

exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader?-url&sourceMap',
  ],
};

exports.js = {
  test: /\.jsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: true,
  },
};

exports.ts = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: false,
  },
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
