'use strict';

let gulp = require('gulp'),
    runSequence = require('run-sequence'),
    babel = require('gulp-babel'),
    replace = require('gulp-ext-replace'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('babel', () => {
    return gulp.src('./src/js/es6/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(replace('.js', '.es6.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('serve', () => {
    return connect.server({
        port: 3000,
        root: '.',
        livereload: true
    });
});

gulp.task('default', (callback) => {
    runSequence('babel', 'serve', callback);
});
