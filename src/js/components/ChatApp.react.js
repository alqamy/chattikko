var React = require('react');
var List = require('./List.react');
var Composer = require('./Composer.react');

var ChatApp = React.createClass({

  render: function() {
    return (
      <div className="chattikko">
        <List />
        <Composer />
      </div>
    );
  }

});

module.exports = ChatApp;
