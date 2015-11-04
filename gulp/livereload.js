var tinylr = require('tiny-lr')();
var gulp = require('gulp');
module.exports = function() {
    tinylr.listen(35728, function(err) {
        console.log("live reload started")
    });

    gulp.watch('app/views/*', notifyLiveReload);
    gulp.watch('app/views/partials/*', notifyLiveReload);
    gulp.watch('public/js/*', notifyLiveReload);
    gulp.watch('public/css/*', notifyLiveReload);

    return gulp
};

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);
    console.log('notfy ---')
    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}
