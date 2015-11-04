var ChatAppDispatcher = require('../dispatcher');
var Notification = require('../notification');

var socketService = require('../services/socketService');
module.exports = {
  submitMessage: function(text) {
    socketService.submitMessage({
      text : text,
      id : Date.now(),
      date : new Date()
    })
  },
  updateMessage: function(data) {
    Notification.add(data.text);
    ChatAppDispatcher.dispatch({
      type:  "NEW_MESSAGE",
      data : data

    })
  },
  updateConnectionStatus : function  () {
  	
  }
};
