const baseConfig = require('../../webpack/config');
const path = require('path');

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
