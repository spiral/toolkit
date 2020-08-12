const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    locker: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: '@spiral-toolkit/locker',
    devtoolNamespace: 'SFLocker',
    // devtoolModuleFilenameTemplate: '@sf-locker://[namespace]/[resource-path]?[loaders]',
  },

  externals: {
    '@spiral-toolkit/core': {
      root: 'SFToolkit',
      commonjs2: '@spiral-toolkit/core',
      commonjs: '@spiral-toolkit/core',
    },
  },
};

module.exports = config;
