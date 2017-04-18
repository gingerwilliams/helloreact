var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('public/css/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('default', function (){
    gulp.watch('public/css/scss/**/*.scss', ['sass'], ['minify-css']);
});