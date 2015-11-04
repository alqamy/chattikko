//Including base , Global functions
require('../base');

//Variables and Modules
var express = require('express'),
    join = require('path').join,
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    routes = rqr('/app/routes'),
    config = rqr('/app/lib/config'),
    hbs = require('hbs'),
    hbsHelper = rqr('/app/helper/hbs'),
    mwHelper = rqr('/app/helper/mw'),
    app = module.exports = express();

//Express middleware and sets
var server =
    app
    .set('view engine', 'html').set('views', join(__base, 'app/views')).engine('html', hbs.__express)
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .use(cookieParser())
    .use('/static',express.static(path.join(__dirname,'..', 'public')))
    .use('/', routes.index)
    .use(mwHelper.nf)
    .use(mwHelper.errorHnadler)
    .listen(config.port, listener);


//SOKET IO
var io = require('socket.io')(server);


//STORING INTO SOCKET IO
// var redis = require('socket.io-redis');

// //REDIS ADAPTER
// io.adapter(redis({
//     host: config.redis.host,
//     port: config.redis.port
// }));

//BROADCAST HAPPENS HERE
io.sockets.on('connection', function(socket) {
    socket.on('message', function(data) {
        io.emit('msg', data);
    });
});



function listener() {
    console.log('Express server listening on port ' + config.port);
}
