var del = require('del'),
    pkg = require('../package.json'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    webpackConfig = require('./webpack.conf');

var BANNER =
  '/*! Spiral Image Cropper Widget v${pkg.version}\n' +
  ' *  https://github.com/spiral-modules/image-cropper/\n' +
  ' *  Copyright (c) 2016, Alex Chepura, Yauheni Yasinau, spiralscout.com\n' +
  ' */\n\n';

module.exports = function(config) {
  gulp.task('source', function(callback) {
    webpack(webpackConfig, function(err, stats) {
      var json = stats.toJson();
      (json.warnings || []).forEach(function(warning) {
        gutil.log(gutil.colors.yellow("[webpack] " + warning));
      });
      (json.errors || []).forEach(function(error) {
        gutil.log(gutil.colors.red("[webpack] " + error));
      });
      if (err) throw new gutil.PluginError('webpack', err);
      callback();
    });
  });

};

