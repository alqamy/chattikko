var gulp = require('./gulp')(['browserify','sass','server','livereload']);

gulp.task('default',['browserify','server','sass','livereload'], function (argument) {
	console.log(argument)
});




