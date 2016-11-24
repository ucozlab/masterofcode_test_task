var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');
var cleanCSS   = require('gulp-clean-css');
var concat     = require('gulp-concat');

gulp.task('compile-less', function() {  
	gulp.src(['./node_modules/npm-font-open-sans/open-sans.less','./layout/less/style.less'])
		.pipe(concat('style.less'))
		.pipe(less())
		.pipe(cleanCSS({advanced : false}))
		.pipe(gulp.dest('./layout/css/'));
});

gulp.task('watch-less', function() {  
	gulp.watch('./layout/less/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less'] );  