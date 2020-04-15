// @ts-ignore
const baseConfig = require('../../webpack/config');

const isDevelopment = process.env.NODE_ENV !== 'production';
const LiveReloadPlugin = require('webpack-livereload-plugin');

const config = {
  ...baseConfig,

  entry: {
    ie11: ['./src/ie11.js'],
    toolkit: ['./src/index.js'],
    toolkit_full: ['./src/index_full.js'],
  },

  output: {
    ...baseConfig.output,
    library: {
      amd: '@spiral-toolkit/toolkit',
      commonjs: '@spiral-toolkit/toolkit',
      root: 'SFToolkit',
    },
  },
};

if (isDevelopment) {
  config.plugins.push(new LiveReloadPlugin({ port: 35730 }));
}

module.exports = config;
