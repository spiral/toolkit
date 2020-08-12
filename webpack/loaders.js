const path = require('path');
const { readdirSync } = require('fs');

const makeIncludeFunction = (namespace) => {
  // console.log(path.join(__dirname,'..', '/packages'));
  const allPackages = readdirSync(path.join(__dirname, '..', '/packages'));
  // console.log(allPackages);
  return (p) => {
    const include = p.indexOf('@spiral-toolkit') >= 0
            || !!allPackages.find((pack) => p.indexOf(`packages${path.sep}${pack}`) >= 0);
    if (include) {
      // console.log(namespace, 'Source will be loaded for', p);
    }
    return include;
  };
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
  test: /\.jsx?$/,
  use: [
    'source-map-loader',
  ],
  include: makeIncludeFunction('js-map'),
  enforce: 'pre',
};

exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader?-url&sourceMap',
  ],
};

/* exports.js = {
  test: /\.jsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    transpileOnly: true,
  },
}; */

exports.asIs = {
  loader: 'do-nothing-loader',
  include: makeIncludeFunction('do-nothing'),
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
