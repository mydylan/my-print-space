var gulp = require("gulp"),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    sass = require('gulp-sass'),    
    csslint = require('gulp-csslint'),
    wrap = require('gulp-wrap'),
    slm = require('gulp-slm');
    
gulp.task('clean', function () {
    return gulp.src('./dist/**/*').pipe(clean());
});

gulp.task("jsbuild", ['clean'], function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(rename({extname: '.css'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('slm', ['clean'], function () {
    return gulp.src('./src/view/*.slim')
        .pipe(slm())
        .pipe(gulp.dest("./dist/"));
});

gulp.task('connect', function() {
    connect.server({
      root: '',
      livereload: true
    });
});

gulp.task('reload', function() {
    gulp.src('./dist/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['clean', 'slm', 'jsbuild', 'sass', 'reload']);
});




gulp.task('default', ['clean', 'slm', 'sass', 'jsbuild', 'watch', 'connect']); 