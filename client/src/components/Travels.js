import React, { Component } from 'react';

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
export default Travels;
