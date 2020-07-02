import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'react-materialize';
import { Button } from 'react-materialize';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';
import { IoIosAddCircleOutline } from 'react-icons/io';

const axios = require('axios');

class Travels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cidade_origem: '',
			cidade_destino: '',
			passeios: [],
		};

		this.handleChangeCidadeOrigem = this.handleChangeCidadeOrigem.bind(
			this
		);
		this.handleChangeCidadeDestino = this.handleChangeCidadeDestino.bind(
			this
		);
		this.handleAPIpasseio = this.handleAPIpasseio.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAPIpasseio(res) {
		this.setState({ passeios: res });
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
		this.handleAPIpasseio(res.data.suggestions);
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return (
			<div style={{}}>
				<form>
					<div
						style={{
							width: '100%',
						}}
					>
						<div
							style={{
								width: '50%',
								float: 'left',
								paddingRight: '10px',
							}}
						>
							<p>Escolha cidade de Origem</p>
							<Select
								name="cidade_origem"
								id="cidade_origem"
								onChange={this.handleChangeCidadeOrigem}
							>
								<option value="" disabled defaultValue>
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
						</div>

						<div
							style={{
								width: '50%',
								float: 'right',
								paddingLeft: '10px',
							}}
						>
							<p>Escolha seu destino</p>
							<Select
								name="cidade_destino"
								id="cidade_destino"
								onChange={this.handleChangeCidadeDestino}
							>
								<option value="" disabled defaultValue>
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
						</div>
					</div>
					<Button
						onClick={this.handleSubmit}
						style={{ backgroundColor: 'purple' }}
					>
						Pesquisar
					</Button>
				</form>

				{this.state.passeios.length > 0 && (
					<TravelsSearch passeios={this.state.passeios} />
				)}
			</div>
		);
	}
}

class TravelsSearch extends Component {
	render() {
		return (
			<div>
				{this.props.passeios.map((passeio) => (
					<Row>
						<Col m={6} s={12}>
							<Card
								className="purple"
								textClassName="white-text"
								title={passeio.group}
							>
								<Table>
									<tbody>
										{passeio.entities.map((entidade) => (
											<tr>
												<td>{entidade.type}</td>
												<td>{entidade.name}</td>
												<td>
													<IoIosAddCircleOutline
														size={22}
														color="#EEE"
													/>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</Card>
						</Col>
					</Row>
				))}
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

export default connect(mapStateToProps, actions)(Travels);
