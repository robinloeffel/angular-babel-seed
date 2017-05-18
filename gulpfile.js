'use strict';

const gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    open = require('open'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    gulpIf = require('gulp-if'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    isDev = process.argv.indexOf('--dev') > -1,
    webpackConfig = isDev ? require('./webpack.config.dev') : require('./webpack.config.prod');

gulp.task('clean', () => {
    return del('dist');
});

gulp.task('open', () => {
    return open('http://localhost:8080');
});

gulp.task('webpack', () => {
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf(!isDev, cleanCss()))
        .pipe(gulpIf(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(plumber())
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('serve', () => {
    return connect.server({
        port: 8080,
        root: 'dist',
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
