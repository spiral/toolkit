// @ts-ignore
const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    ie11: ['./src/ie11.js'],
    toolkit: ['./src/index.js'],
    plugin_date: ['./src/form/date/index.js'],
    plugin_datetime: ['./src/form/datetime/index.js'],
    toolkit_full: ['./src/index_full.js'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/toolkit',
      commonjs: '@spiral-toolkit/toolkit',
      root: 'SFToolkit',
    },
  },
};

module.exports = config;
