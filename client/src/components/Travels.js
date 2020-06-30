import React, { Component } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'react-materialize';
import { Button } from 'react-materialize';
import DatePicker from 'react-date-picker';

const axios = require('axios');

class Travels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cidade_origem: '',
			cidade_destino: '',
		};

		this.handleChangeCidadeOrigem = this.handleChangeCidadeOrigem.bind(
			this
		);
		this.handleChangeCidadeDestino = this.handleChangeCidadeDestino.bind(
			this
		);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeCidadeOrigem(event) {
		this.setState({ cidade_origem: event.target.value });
	}

	handleChangeCidadeDestino(event) {
		this.setState({ cidade_destino: event.target.value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		alert(
			'cidade origem: ' +
				this.state.cidade_origem +
				'\n cidade destino: ' +
				this.state.cidade_destino
		);
		var res = await getHotels(this.state.cidade_destino);
		console.log(res.data);
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return (
			<div style={{}}>
				<form id="pesquisa-voos">
					<div id="origem">
						<p>Origem:</p>
						<Select
							name="cidade_origem"
							id="cidade_origem"
							onChange={this.handleChangeCidadeOrigem}
						>
							<option value="" disabled selected>
								Origem
							</option>
							<option value="sao paulo">São Paulo</option>
							<option value="rio de janeiro">
								Rio de Janeiro
							</option>
							<option value="curitiba">Curitiba</option>
							<option value="belo horizonte">
								Belo Horizonte
							</option>
						</Select>  
						<DatePicker
							className ="data-ida"
							onChange = {

							}
						/>
					</div>
					<div id="destino">
						<p>Destino:</p>
						<Select
							name="cidade_destino"
							id="cidade_destino"
							onChange={this.handleChangeCidadeDestino}
						>
							<option value="" disabled selected>
								Destino
							</option>
							<option value="sao paulo">São Paulo</option>
							<option value="rio de janeiro">
								Rio de Janeiro
							</option>
							<option value="curitiba">Curitiba</option>
							<option value="belo horizonte">
								Belo Horizonte
							</option>
						</Select>
						<DatePicker
							className ="data-volta"
							onChange = {

							}
						/>
					</div>
					<Button onClick={this.handleSubmit}>Pesquisar</Button>
				</form>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

async function getHotels(cidadeDestino) {
	var res = await axios({
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/locations/search',
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host': 'hotels4.p.rapidapi.com',
			'x-rapidapi-key':
				'0bdd73a0bamsh21165a979cefe35p1f8757jsn91ce57cf4a10',
			useQueryString: true,
		},
		params: {
			locale: 'en_US',
			query: cidadeDestino,
		},
	});
	return res;
}

async function getVoos(cidadeDestino) {
	var res = await axios({
		method: 'GET',
		url: 'https://hotels4.p.rapidapi.com/locations/search',
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host': 'hotels4.p.rapidapi.com',
			'x-rapidapi-key':
				'0bdd73a0bamsh21165a979cefe35p1f8757jsn91ce57cf4a10',
			useQueryString: true,
		},
		params: {
			locale: 'en_US',
			query: cidadeDestino,
		},
	});
	return res;
}

export default connect(mapStateToProps, actions)(Travels);
