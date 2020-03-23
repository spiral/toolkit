const CheckerPlugin = require('fork-ts-checker-webpack-plugin');
const baseConfig = require('../../webpack/config');
const path = require('path');

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
    '@spiral-toolkit/core': '@spiral-toolkit/core',
  },

  plugins: [
    new CheckerPlugin(
      {
        tsconfig: path.resolve('tsconfig.json'),
        diagnosticFormatter: 'ts-loader', // optional, one of 'ts-loader', 'stylish', 'codeframe'
      },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },

  resolve: {
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
