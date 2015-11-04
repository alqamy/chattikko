var uglify = require('gulp-uglify');
var gulp = require('gulp');

//gulp.task('minify') 
module.exports = function (){
  return gulp.src('public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/main.min.js'));
}

