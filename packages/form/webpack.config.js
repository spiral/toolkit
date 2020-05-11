const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    form: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/form',
      commonjs: '@spiral-toolkit/form',
      root: 'SFForm',
    },
  },


  externals: {
    '@spiral-toolkit/core': {
      root: 'SFToolkit',
      commonjs: '@spiral-toolkit/core',
      amd: '@spiral-toolkit/core',
      commonjs2: '@spiral-toolkit/core',
    },
  },
};

module.exports = config;
