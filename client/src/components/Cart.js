import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return <h1>Essa é a pagina com carrinho da aplicação</h1>;
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Cart);
