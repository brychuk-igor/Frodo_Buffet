require('require-dir')('./gulp', {recurse: true});
/*
var gulp = require('gulp');
var fs = require('fs');
var data = require('gulp-data');
var stylus = require('gulp-stylus');
// include, if you want to work with sourcemaps
// var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var cssnano = require('gulp-cssnano');
gulp.task('default', []);

// copy src automatically into build
gulp.task('html', function(){
	return gulp
		.src('src/assets/img/!*.*')
		//.pipe(livereload({start:true}))
		.pipe(gulp.dest('build/img/'));
})
gulp.task('html:watch', function(){
	//livereload.listen();
	 gulp.watch('src/assets/img/!*.*', ['html']);
	 gulp.watch('src/!*.pug', ['pug']);
   gulp.watch('src/assets/css/all.styl', ['styles']);



})

gulp.task('pug', function buildHTML() {
  return gulp.src('src/!*.pug')
  .pipe(pug({
		data: {
			 "content_blocks": JSON.parse( fs.readFileSync('src/data/content-graph-block.json', { encoding: 'utf8' }) )
		 }
    // Your options in here.
  }))
	.pipe(gulp.dest('build/'));
});
gulp.task('styles', function () {
  return gulp.src('src/assets/css/all.styl')
    .pipe(stylus())
		.pipe(cssnano())
    .pipe(gulp.dest('build/css'));
});
/!*
gulp.task('styl', function () {
  return gulp.src('src/assets/css/!*.styl')
    .pipe(gulp.dest('build/css'));
});
*!/
// Stylus has an awkward and perplexing 'include css' option


// Inline sourcemaps
gulp.task('sourcemaps-inline', function () {
  return gulp.src('./css/sourcemaps-inline.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/build'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
/!*
gulp.task('copy_fonts', function(){
  return gulp.src('src/fonts/roboto/!*.*')
    .pipe(gulp.dest('build/fonts/roboto/'));

})
*!/

gulp.task('server', function() {
    browserSync.init({
        server: "./build"
    });
    //gulp.watch("src/!*.scss", ['sass']).on('change', browserSync.reload);
		//gulp.watch("src/!*.styl", ['styl']).on('change', browserSync.reload);
		//gulp.watch("src/!*.css", ['css']).on('change', browserSync.reload);
		gulp.watch("src/!*.html", ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['pug', 'html:watch', 'html', 'styles', 'server']);
*/
