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
    paths = require('./config/paths'),
    webpackConfig = isDev ? require('./config/webpack.config.dev') : require('./config/webpack.config.prod');

gulp.task('clean', () => {
    return del(paths.dist.root);
});

gulp.task('open', () => {
    return open('http://localhost:8080');
});

gulp.task('webpack', () => {
    return gulp.src(paths.src.files.jsEntry)
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(connect.reload());
});

gulp.task('sass', () => {
    return gulp.src(paths.src.files.sass)
        .pipe(plumber())
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11'],
            cascade: false
        }))
        .pipe(gulpIf(!isDev, cleanCss()))
        .pipe(gulpIf(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    return gulp.src(paths.src.files.html)
        .pipe(plumber())
        .pipe(changed(paths.dist.root))
        .pipe(gulp.dest(paths.dist.root))
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
    gulp.watch(paths.src.files.js, ['webpack']);
    gulp.watch(paths.src.files.sass, ['sass']);
    gulp.watch(paths.src.files.html, ['html']);
});

gulp.task('build', (callback) => {
    runSequence(['webpack', 'sass', 'html'], callback);
});

gulp.task('default', (callback) => {
    runSequence('clean', 'build', 'serve', 'watch', 'open', callback);
});
