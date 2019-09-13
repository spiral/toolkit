const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    locker: ['./src/index.js'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/locker',
  },

  externals: {
    '@spiral-toolkit/core': '@spiral-toolkit/core',
  },
};

module.exports = config;
