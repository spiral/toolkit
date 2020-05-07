const baseConfig = require('../../webpack/config');
const path = require('path');

const config = {
  ...baseConfig,

  entry: {
    datepicker: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/datepicker',
      commonjs: '@spiral-toolkit/datepicker',
      root: 'SFDatepicker',
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
