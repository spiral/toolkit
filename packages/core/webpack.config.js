const baseConfig = require('../../webpack/config');
const loaders = require('../../webpack/loaders');
const plugins = require('../../webpack/plugins');

const config = {
  ...baseConfig,

  entry: {
    core: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/core',
  },

  plugins,

  module: {
    rules: [
      loaders.jsmap,
      loaders.js,
    ],
  },
};

module.exports = config;
