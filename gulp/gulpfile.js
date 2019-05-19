var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	uglifyjs = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload');

gulp.task('css', () => {
	return gulp.src([
		'../staticfiles/css/development/normalize.css',
		'../staticfiles/css/development/sass/html.sass',
		'../staticfiles/css/development/sass/header.sass',
		'../staticfiles/css/development/sass/main.sass',
		'../staticfiles/css/development/sass/footer.sass',

	])
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer('last 5 versions', 'Android >= 2.3', 'ChromeAndroid >= 20'))
			.pipe(concat('facelock.css'))
			.pipe(gulp.dest('../staticfiles/css/production/'))
			.pipe(uglifycss())
			.pipe(rename('facelock.min.css'))
		.pipe(gulp.dest('../staticfiles/css/production/'))
			.pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen();
	gulp.watch('../staticfiles/css/development/sass/*', gulp.series('css'));
});

