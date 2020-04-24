const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const srcPath = 'src';
const distPath = 'dist';
const buildPath = path.resolve(__dirname, distPath);
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: {
    keeper: path.join(__dirname, srcPath, 'index.js'),
  },
  output: {
    publicPath: isDevelopment ? '/keeper/' : undefined,
    filename: '[name].js',
    path: buildPath,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: {
      amd: '@spiral-toolkit/keeper',
      commonjs: '@spiral-toolkit/keeper',
      root: 'SFKeeper',
    },
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            // loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            // loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              // publicPath: path.join('/', distPath, 'fonts'),
            },
          },
        ],
      },
    ],
  },
  plugins: isDevelopment
    ? [
      new StyleLintPlugin({
        configFile: './.stylelintrc.json',
        files: [path.join(srcPath, '**/*.scss')],
        failOnError: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ]
    : [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
          },
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: true,
      }),
    ],
};
