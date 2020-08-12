// const CheckerPlugin = require('fork-ts-checker-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const baseConfig = require('../../webpack/config');

const config = {
  ...baseConfig,

  entry: {
    datagrid: ['./src/index.ts'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/datagrid',
      commonjs: '@spiral-toolkit/datagrid',
      root: 'SFDataGrid',
    },
    devtoolNamespace: 'SFDataGrid',
    // devtoolModuleFilenameTemplate: '@sf-datagrid://[namespace]/[resource-path]?[loaders]',
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
