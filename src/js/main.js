var socketEventHandler = require('./services/socketEventHandlers.js');
var app = require('./app.js');
var Notification = require('./notification');

window.onload = function() {
    window.isActive = true;
    window.onfocus = function() {
        window.isActive = true;
        Notification.changeFavIcon()

    };
    window.onblur = function() {
        window.isActive = false;
    };
}
