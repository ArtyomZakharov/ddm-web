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
				<div className="row">
					<div className="col-sm-6">
						<DecisionButton handleClick={this.stateVerdict.bind(this)} />
					</div>
					<div className="col-sm-6">
						<DecisionLabel verdict={this.state.verdict} />
					</div>
				</div>
			</div>
		);
	};
}

export default AppContainer;