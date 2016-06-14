import React, {Component} from 'react';

class DecisionLabel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<span>{this.props.verdict}</span>
		);
	}
}

export default DecisionLabel;