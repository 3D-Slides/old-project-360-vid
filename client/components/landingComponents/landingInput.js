var React = require('react');
var Link = require('react-router').Link;

var InputBox = React.createClass({
	
	render: function(props) {
		console.log(this.props.createRoom);
		return (
			<div>
				<form onSubmit={this.props.createRoom}>
					<input type='text' placeholder='paste your youtube URL here...'></input>
					{/*this is a method from react-router that links to the specified route (use instead of 'a' tag)*/}
					<a href='main' onClick={this.props.createRoom}>Create Room</a>
				</form>
			</div>
		)
	}

})

module.exports = InputBox;