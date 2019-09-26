const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    core: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/core',
  },
};

module.exports = config;
