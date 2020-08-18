const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    tinymce: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/tinymce',
      commonjs: '@spiral-toolkit/tinymce',
      root: 'SFTinyMCE',
    },
    devtoolNamespace: 'SFTinyMCE',
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
