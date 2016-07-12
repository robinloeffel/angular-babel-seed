'use strict';

let gulp = require('gulp'),
    runSequence = require('run-sequence'),
    del = require('del'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('default', (callback) => {
    runSequence('clean', ['babel', 'less', 'html', 'vendor'], 'watch', 'serve', callback);
});

gulp.task('clean', () => {
    return del('dist/*');
});

gulp.task('babel', () => {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('less', () => {
    return gulp.src('src/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
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

gulp.task('vendor', () => {
    return gulp.src([
            'node_modules/core-js/client/shim.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('serve', () => {
    return connect.server({
        port: 3000,
        root: 'dist/',
        livereload: true
    });
});

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['babel']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/*.html', ['html']);
});
