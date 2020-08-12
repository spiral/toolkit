const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    core: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/core',
      commonjs: '@spiral-toolkit/core',
      root: 'sf',
    },
    devtoolNamespace: 'SFCore',
    // devtoolModuleFilenameTemplate: '@sf-core://[namespace]/[resource-path]?[loaders]',
  },
};

module.exports = config;
