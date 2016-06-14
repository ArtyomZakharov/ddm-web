
function makeADecison() {
	return (Math.ceil(Math.random() * 10) % 2 == 0 ? "Nah, fam" : "Go have a drink");
}

class DecisionLabel extends React.Component {

	render() {
		return (
			<span>{this.props.text}</span>
		);
	}
}

class DecisionButton extends React.Component {

	render() {
		return (
			<button onClick={this.props.handleClick}>Make a decision</button>
		);
	}
}

class AppContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			decision: ''
		};
	}

	sayHello() {
		alert(makeADecison());
	}

	getDecision() {
		this.setState({
			decision: makeADecison()
		});
	}

	render() {
		return (
			<div>
				<DecisionButton handleClick={this.getDecision.bind(this)} />
				<DecisionLabel text={this.state.decision} />
			</div>
		);
	}
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));