var gulp = require('gulp');
//var runsequence = require('run-sequence');
var buildTasks = require('./js-source/build.js');

var config = {serverPort: 5020, testPort: 5021};
config.host = 'localhost:' + config.serverPort;

buildTasks(config);

gulp.task('default', ['js-source']);

gulp.task('build', ['source']);