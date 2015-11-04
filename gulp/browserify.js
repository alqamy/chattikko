var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var reactify = require('reactify');
var uglify = require('gulp-uglify');


var sourcePath = './src/js/main.js',
	destFolder =  'public/js'
    destFile = 'main.js';


// var bundle = browserify('src/js/main.js').bundle()

module.exports = function(done) {
    // console.log(argument())


    var customOpts = {
        entries: [sourcePath],
        transform : [reactify],
        debug: true
    };
    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));

    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal


    function bundle() {
        return b.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(destFile))
            // optional, remove if you don't need to buffer file contents
            .pipe(buffer())
            // optional, remove if you dont want sourcemaps
            .pipe(sourcemaps.init({
                loadMaps: true
            })) // loads map from browserify file
            // Add transformation tasks to the pipeline here.
            // .pipe(uglify())
            .pipe(sourcemaps.write('./')) // writes .map file
            .pipe(gulp.dest(destFolder));
    }

    return bundle();


}
