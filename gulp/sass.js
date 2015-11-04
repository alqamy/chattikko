var sass = require('gulp-sass');
var gulp = require('gulp');

//gulp.task('minify') 
module.exports = function() {

    gulp.watch(['src/sass/**/*.scss'], ['compileSass'])
    gulp.task('compileSass', function() {
        return gulp.src('src/sass/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('public/css/'));

    })

    return gulp;
}
