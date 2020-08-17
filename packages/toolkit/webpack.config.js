// @ts-ignore
const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    ie11: ['./src/ie11.ts'],
    toolkit: ['./src/index.ts'],
    toolkit_full: ['./src/index_full.ts'],
  },

  output: {
    ...baseConfig.output,
    libraryExport: 'default',
    library: {
      amd: '@spiral-toolkit/toolkit',
      commonjs: '@spiral-toolkit/toolkit',
      root: 'SFToolkit',
    },
  },
};

module.exports = config;
