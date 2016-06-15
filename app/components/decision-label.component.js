import React, {Component} from 'react';

class DecisionLabel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var colorClass = '';
		if (this.props.verdict == 'Go have a drink') {
			colorClass = 'positive';
		} else if (this.props.verdict == 'Nah, fam') {
			colorClass = 'negative';
		}
		return (
			<div className="decision-label-box col-xs-12">
				<span className={colorClass}>{this.props.verdict}</span>
			</div>
		);
	}
}

export default DecisionLabel;