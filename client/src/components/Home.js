import React, { Component } from 'react';

class Home extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}

	render() {
		return <h1>Sua Home, onde você deve ver suas viagens</h1>;
	}
}
export default Home;
