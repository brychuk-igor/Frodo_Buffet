let gulp = require('gulp');
let notify = require('gulp-notify');
//let jsmin = require('gulp-jsmin');
let plumber = require("gulp-plumber");
let config = require('../config');

const JS_PAGES_DIR = `${config.src.js}/*.js`;
const JS_DIR = `${config.src.js}/**/*.js`;
//console.log(STYLUS_DIR);
let success_build_js_files = 'JS files have been completed';
let js_task_name = 'js';
let js_watch_task_name = 'js:watch';

gulp.task(js_task_name, function() {
    return gulp.src([JS_PAGES_DIR])
        //.jsmin()
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(gulp.dest('build/js'))
        .pipe(notify(success_build_js_files));
});
gulp.task(js_watch_task_name, function() {
    gulp.watch(JS_DIR, [js_task_name]);
});
