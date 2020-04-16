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
