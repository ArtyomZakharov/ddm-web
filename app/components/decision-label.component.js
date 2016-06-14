import React, {Component} from 'react';

class DecisionLabel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<span className="well">{this.props.verdict}</span>
		);
	}
}

export default DecisionLabel;