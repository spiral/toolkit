const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    notifications: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/notifications',
      commonjs: '@spiral-toolkit/notifications',
      root: 'SFNotifications',
    },
    devtoolNamespace: 'SFNotifications',
    // devtoolModuleFilenameTemplate: '@sf-qrcode://[namespace]/[resource-path]?[loaders]',
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
