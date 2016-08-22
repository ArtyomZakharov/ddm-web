import React, {Component} from 'react';

class DecisionLabel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var colorClass = 'dec-lbl';
		var text = 'HIT THE BUTTON!';
		if (this.props.verdict == true) {
			text = 'Go have a drink';
			colorClass += ' positive';

		} else if (this.props.verdict == false) {
			text = 'Nah, fam';
			colorClass += ' negative';
		}
		return (
			<div className={colorClass}>{text}</div>
		);
	}
}

export default DecisionLabel;