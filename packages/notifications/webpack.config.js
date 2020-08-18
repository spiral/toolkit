const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    qrcode: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/qrcode',
      commonjs: '@spiral-toolkit/qrcode',
      root: 'SFQRCode',
    },
    devtoolNamespace: 'SFQRCode',
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
