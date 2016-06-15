import React, {Component} from 'react';

class DecisionButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="decision-button-box col-xs-12">
				<button onClick={this.props.handleClick}>decide!</button>
			</div>
		);
	}
}

export default DecisionButton;