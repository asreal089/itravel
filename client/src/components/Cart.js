import React, { Component } from 'react';

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
export default Cart;
