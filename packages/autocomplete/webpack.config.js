const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    autocomplete: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/autocomplete',
      commonjs: '@spiral-toolkit/autocomplete',
      root: 'SFAutocomplete',
    },
    devtoolNamespace: 'SFAutocomplete',
    // devtoolModuleFilenameTemplate: '@sf-autocomplete://[namespace]/[resource-path]?[loaders]',
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
