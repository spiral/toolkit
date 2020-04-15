const path = require('path');
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
  },

  externals: {
    '@spiral-toolkit/core': {
      root: 'SFToolkit',
      commonjs: '@spiral-toolkit/core',
      amd: '@spiral-toolkit/core',
      commonjs2: '@spiral-toolkit/core',
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
