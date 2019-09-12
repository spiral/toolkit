const baseConfig = require('../../webpack/config');
const loaders = require('../../webpack/loaders');
const plugins = require('../../webpack/plugins');

const config = {
  ...baseConfig,

  entry: {
    toolkit: ['./src/toolkit.full.js'],
    'toolkit.no-styles': ['./src/toolkit.no-styles.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/toolkit',
  },

  plugins,

  module: {
    rules: [
      loaders.jsmap,
      loaders.js,
      loaders.css,
      loaders.less,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },
};

module.exports = config;
