var socket = require('./socket');
var Action = require('../actions');
socket.on('connect', function() {
	console.log("connected")
	Action.updateConnectionStatus();
});
socket.on('error', function(error) {
	console.log("error",error)
});

socket.on('msg', function(data) {
	console.log(data)
	Action.updateMessage(data);
});