var gulp         = require('gulp'),
	less         = require('gulp-less'),
	watch        = require('gulp-watch'),
	cleanCSS     = require('gulp-clean-css'),
	concat       = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify       = require('gulp-uglifyjs'),
	paths        = {
		scripts : [
			'./layout/js/src/jquery.min.js',
			'./layout/js/src/chart.js',
			'./layout/js/src/bootstrap_resize.js',
			'./node_modules/bxslider/dist/jquery.bxslider.min.js',
			'./layout/js/src/main.js'
		]
	};

gulp.task('compile-less', function() {
	gulp.src('./layout/less/style.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({advanced : false}))
		.pipe(gulp.dest('./layout/css/'));
});

gulp.task('watch-less', function() {  
	gulp.watch('./layout/less/*.less', ['compile-less']);
});

gulp.task('compile-js', function() {
	gulp.src(paths.scripts)
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./layout/js/'));
});

gulp.task('watch-js', function() {
	gulp.watch(paths.scripts, ['compile-js']);
});

gulp.task('default', ['compile-less', 'watch-less', 'compile-js', 'watch-js'] );  