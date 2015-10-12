var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    sass = require('gulp-sass'),    
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    wrap = require('gulp-wrap'),
    slm = require('gulp-slm'),
    link = "../src/assets";
    
gulp.task('clean', function () {
    return gulp.src('./dist/**/*').pipe(clean());
});

gulp.task('jsbuild', ['clean'], function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', ['clean'], function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(replace("_link_", link))
        .pipe(concat('main.scss'))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(rename({extname: '.css'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('slm', ['clean'], function () {
    return gulp.src('./src/view/*.slim')
        .pipe(slm())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('source', ['clean'], function () {
    return gulp.src('./src/assets/*.*')
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('connect', function() {
    connect.server({
      root: '',
      livereload: true
    });
});

gulp.task('reload', ['clean', 'slm', 'jsbuild', 'sass'], function() {
    gulp.src('./dist/main.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['reload']);
});




gulp.task('default', ['clean', 'slm', 'sass', 'jsbuild', 'watch', 'connect']); 