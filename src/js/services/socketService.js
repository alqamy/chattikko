var socket = require('./socket');
module.exports = {
	submitMessage  : function  (text) {
		console.log("submitMessage" , text);
		socket.emit("message",text)
	}
}