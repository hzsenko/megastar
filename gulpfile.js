var gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');

gulp.task('less', function(){
	gulp.src('app/less/**/*')
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: true
	}))
	.pipe(cleanCSS())
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch',['less'], function(){
	gulp.watch(['app/less/**/*'], ['less']);
});