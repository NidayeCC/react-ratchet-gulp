// dependencies plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    react = require('gulp-react'),
    fileinclude = require('gulp-file-include'),
    gulpif = require('gulp-if'),
    sprite = require('css-sprite').stream;

var paths = {
    vendorJs: [
        'app/vendor/react.js',
        'app/vendor/zepto.js'
    ],
    vendorCss: [
        'app/vendor/ratchet.css'
    ],
    vendorFont: [
        'app/fonts/*'
    ],
    appJsx: [
        'app/components/**/*.jsx'
    ],
    appScss: [
        'app/components/**/*.scss'
    ],
    appIcons: [
        'app/icons/*.png'
    ],
    appViews: [
        'app/views/**/*.html'
    ],
    cleanPaths: [
        'public/assets/css/*',
        'public/assets/js/*',
        'public/assets/images/*',
        'public/assets/fonts/*',
        'public/views/*'
    ]
};

// vendor style
gulp.task('styles', function () {
    return gulp.src(paths.vendorCss)
        .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('vendor.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(notify({message: 'styles completed!'}));
});

// vendor fonts
gulp.task('fonts', function () {
    return gulp.src(paths.vendorFont)
        .pipe(gulp.dest('public/assets/fonts'))
        .pipe(notify({message: 'fonts completed!'}));
});

// vendor scripts
gulp.task('scripts', function () {
    return gulp.src(paths.vendorJs)
        .pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(notify({message: 'script completed!'}));
});

// app style
gulp.task('style', function () {
    return gulp.src(paths.appScss)
        .pipe(sass({ style: 'expanded', "sourcemap=none": true}))
        .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(notify({message: 'style completed!'}));
});

// app script
gulp.task('script', function () {
    return gulp.src(paths.appJsx)
        .pipe(concat('app.jsx'))
        .pipe(react())
        .pipe(rename('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(notify({message: 'script completed!'}));
});

// app sprite
gulp.task('sprite', function () {
    return gulp.src(paths.appIcons)
        .pipe(sprite({
            name: 'icons',
            out: 'public/assets/images',
            cssPath: '../images/icons.png',
            style: './icons.css',
            processor: 'css',
            prefix: 'iss'
        }))
        .pipe(imagemin())
        .pipe(gulpif('*.png', gulp.dest('public/assets/images/'), gulp.dest('public/assets/css/')))
        .pipe(notify({message: 'sprite completed!'}));
});

// app view
gulp.task('view', function () {
    gulp.src(paths.appViews)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('public/views'))
        .pipe(notify({message: 'view completed!'}));
});

// watch
gulp.task('watch', function () {

    gulp.watch(paths.appScss, ['style']);
    gulp.watch(paths.appJsx, ['script']);
    gulp.watch(paths.appIcons, ['sprite']);
    gulp.watch(paths.appViews, ['view']);

});

// clean
gulp.task('clean', function (cb) {
    del(paths.cleanPaths, cb)
});

gulp.task('default', ['clean'], function () {
    gulp.start('sprite', 'styles', 'fonts', 'scripts', 'view', 'style', 'script');
});
