import React from 'react';
import ddm from 'drink_decision_maker';

import DecisionLabel from '../components/decision-label.component';
import DecisionButton from '../components/decision-button.component';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			verdict: 'Dun kno, blud'
		}
	}

	stateVerdict() {
		this.setState({
			verdict: ddm.makeADecision()
		});
	}

	render() {
		return (
			<div>
				<DecisionButton handleClick={this.stateVerdict.bind(this)} />
				<DecisionLabel verdict={this.state.verdict} />
			</div>
		);
	};
}

export default AppContainer;