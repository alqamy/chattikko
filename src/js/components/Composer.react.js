var Actions = require('../actions');
var React = require('react');
var Composer = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return (
      <div className="pallete">
        <input type="text" id="text_field"  
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown} />
      </div>
    );
  },
  _onKeyDown: function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log("Clicks enter")
      var text = this.state.text.trim();
      if (text) {
        Actions.submitMessage(text);
      }
      this.setState({text: ''});
    }
  },
  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  }
});

module.exports = Composer;
