import React, { Component } from 'react';
import { connect } from 'react-redux';

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
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Home);
