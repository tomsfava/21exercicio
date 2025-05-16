const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// function watch() {
//     gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
//     gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
// }

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(styles));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(scripts));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(images));
}
//exports.watch = watch;