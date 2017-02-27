var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../config');

gulp.task('watch', [
    // 'sprite:watch',
    'copy:watch',
    // 'font:watch',
    // 'js:watch'
    'stylus:watch',
    'pug:watch',
    'html:watch',
]);

gulp.task('delete', function (cb) {
    rimraf('./'+config.dest.root, cb);
});
gulp.task('default', ['server','watch','pug','copy','stylus'], function() {});
gulp.task('build', ['html','pug','copy','stylus'], function() {}); //,'font','sprite','js',