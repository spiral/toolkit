var gulp = require('gulp');
//var runsequence = require('run-sequence');
var buildTasks = require('./config/build.js');

var config = {
  serverPort: 5020,
  testPort: 5021
};
config.host = 'localhost:' + config.serverPort;

buildTasks(config);

gulp.task('default', ['build']);

gulp.task('build', ['source']);

