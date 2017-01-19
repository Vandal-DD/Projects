var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('auto', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});
var csscomb = require('gulp-csscomb');

gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(csscomb())
        .pipe(gulp.dest('css/'));
});

