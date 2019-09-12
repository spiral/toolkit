const baseConfig = require('../../webpack/config');
const loaders = require('../../webpack/loaders');
const plugins = require('../../webpack/plugins');

const config = {
  ...baseConfig,

  entry: {
    locker: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/locker',
  },

  plugins,

  module: {
    rules: [
      loaders.jsmap,
      loaders.js,
    ],
  },

  externals: {
    '@spiral-toolkit/core': '@spiral-toolkit/core',
  },
};

module.exports = config;
