var React = require('react');

var Message = React.createClass({
  render: function() {
    var message = this.props.message;
    message.date = new Date(message.date);
    return (
      <li className="left">
       <time> {message.date.toLocaleTimeString()} </time>
       <span> {message.text} </span>
      </li>
    );
  }

});

module.exports = Message;
