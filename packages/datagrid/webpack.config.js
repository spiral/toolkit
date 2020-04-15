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
  },

  externals: {
    '@spiral-toolkit/core': {
      root: 'SFToolkit',
      commonjs2: '@spiral-toolkit/core',
      commonjs: '@spiral-toolkit/core',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: false,
        },
      },
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: [
      '.ts',
      '.js',
      '.json',
      '.web.js',
      '.less',
      '.css',
    ],
  },
};

module.exports = config;
