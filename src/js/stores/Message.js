var ChatAppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _messages = {};


var MessageStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit("change");
  },

  addChangeListener: function(callback) {
    this.on("change", callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener("change", callback);
  },

  get: function(id) {
    return _messages[id];
  },

  getAll: function() {
    return _messages;
  }

});

MessageStore.dispatchToken = ChatAppDispatcher.register(function(action) {

  switch(action.type) {

    case "NEW_MESSAGE":
      _messages[action.data.id] = action.data;
      MessageStore.emitChange();
      console.log(_messages)
      break;

    default:
      console.log("knock knock")
  }

});

module.exports = MessageStore;
