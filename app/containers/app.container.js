import React from 'react';
import ddm from 'drink_decision_maker';

import DecisionLabel from '../components/decision-label.component';
import DecisionButton from '../components/decision-button.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';

class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			verdict: null
		}
	}

	stateVerdict() {
		this.setState({
			verdict: ddm.makeADecision()
		});
	}

	render() {
		return (
			<div className="main-things">
				<DecisionLabel verdict={this.state.verdict} />
				{ this.state.verdict === null &&  <DecisionButton handleClick={this.stateVerdict.bind(this)} /> }

			</div>
		);
	};
}

export default AppContainer;
