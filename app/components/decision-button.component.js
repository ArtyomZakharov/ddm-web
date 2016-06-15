import React, {Component} from 'react';

class DecisionButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="decision-button-box">
				<button onClick={this.props.handleClick}>decide!</button>
			</div>
		);
	}
}

export default DecisionButton;