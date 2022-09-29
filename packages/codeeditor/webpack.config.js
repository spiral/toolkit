const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    tinymce: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/codeeditor',
      commonjs: '@spiral-toolkit/codeeditor',
      root: 'SFCodeEditor',
    },
    devtoolNamespace: 'SFCodeEditor',
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
