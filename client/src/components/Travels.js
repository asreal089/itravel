import React, { Component } from 'react';
import { connect } from 'react-redux';

class Travels extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return <h1>Pagina de busca de Viagens</h1>;
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Travels);
