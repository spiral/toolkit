const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    toolkit: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/toolkit',
  },
};

module.exports = config;
