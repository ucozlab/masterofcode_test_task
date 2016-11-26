var gulp     = require('gulp'),
	less     = require('gulp-less'),
	watch    = require('gulp-watch'),
	cleanCSS = require('gulp-clean-css'),
	concat   = require('gulp-concat');

gulp.task('compile-less', function() {
	gulp.src('./layout/less/style.less')
		.pipe(less())
		//.pipe(cleanCSS({advanced : false}))
		.pipe(gulp.dest('./layout/css/'));
});

gulp.task('watch-less', function() {  
	gulp.watch('./layout/less/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less'] );  