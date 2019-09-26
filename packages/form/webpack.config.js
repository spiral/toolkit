const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    form: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/form',
  },

  externals: {
    '@spiral-toolkit/core': '@spiral-toolkit/core',
  },
};

module.exports = config;
