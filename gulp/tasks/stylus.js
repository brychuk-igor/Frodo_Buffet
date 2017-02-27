let gulp = require('gulp');
let stylus = require('gulp-stylus');
let cssnano = require('gulp-cssnano');
let autoprefixer = require('autoprefixer-stylus');
let config = require('../config');

const STYLUS_PAGES_DIR = `${config.src.stylus}/stylus/*.stylus`;
const STYLUS_DIR = `${config.src.stylus}/**/*.stylus`;

let success_build_stylus_files = 'Stylus files have been completed';
let stylus_task_name = 'stylus';
let stylus_watch_task_name = 'stylus:watch';

gulp.task(stylus_task_name, function() {
    return gulp.src('src/stylus/all.styl')
        .pipe(stylus({'include css': true}))
        .pipe(cssnano())
        .pipe(gulp.dest('build/css'));

});
gulp.task(stylus_watch_task_name, function() {
    gulp.watch('src/stylus/all.styl', ['stylus']);
});
