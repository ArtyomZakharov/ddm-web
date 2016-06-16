import React, {Component} from 'react';

class DecisionButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="dec-btn" onClick={this.props.handleClick}>decide!</button>
		);
	}
}

export default DecisionButton;