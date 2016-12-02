'use strict';

let gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    open = require('open'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    webpack = require('webpack'),
    webpackWrapper = require('webpack-stream');

gulp.task('clean', () => {
    return del('dist/*');
});

gulp.task('open', () => {
    return open('http://localhost:8080');
});

gulp.task('webpack', () => {
    let webpackConfig = process.argv[2] === '--dev' ? require('./webpack.config.dev.js') : require('./webpack.config.prod.js');

    return gulp.src('src/js/main.js')
        .pipe(webpackWrapper(webpackConfig, webpack))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', () => {
    return connect.server({
        port: 8080,
        root: 'dist/',
        livereload: true
    });
});

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['webpack']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('build', (callback) => {
    runSequence(['webpack', 'sass', 'html'], callback);
});

gulp.task('default', (callback) => {
    runSequence('clean', 'build', 'serve', 'watch', 'open', callback);
});
