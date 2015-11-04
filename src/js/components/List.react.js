var MessageStore = require('../stores/Message');
var React = require('react');
var Message = require('./Message.react');

var List = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    MessageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var messages = [];
    for(var key in this.state.messages){
      var message = this.state.messages[key]
      console.log("message")
      console.log(message)
      messages.push(<Message key={message.id} message={message} /> )
    }

    return (
        <div id="messages_wrapper">
          { messages.length>0 ? 
            <ul id="messages">
              {messages}
          < /ul>
          : <div className="firstMessage"> Its your time to start something new !.... </div> }
        </div>
    );
  },

  componentDidUpdate: function() {
    this._scrollToBottom();
  },

  _scrollToBottom: function() {
    // var ul = this.refs.messageList.getDOMNode();
    // ul.scrollTop = ul.scrollHeight;
  },

  /**
   * Event handler for 'change' events coming from the MessageStore
   */
  _onChange: function() {
    this.setState(
      { messages : MessageStore.getAll()}
    );
  }

});

module.exports = List;
