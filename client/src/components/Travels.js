import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'react-materialize';
import { Button } from 'react-materialize';
import formatDate from './FormatDate';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';
import { IoIosAddCircleOutline } from 'react-icons/io';

/** novo datepicker */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt)

const axios = require('axios');
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

class Travels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cidade_origem: '',
			cidade_destino: '',
			data_ida: '',
			data_volta: ''
		};

		this.handleChangeCidadeOrigem = this.handleChangeCidadeOrigem.bind(
			this
		);

		this.handleChangeCidadeDestino = this.handleChangeCidadeDestino.bind(
			this
		);

		this.handleChangeDataIda = this.handleChangeDataIda.bind(
			this
		);

		this.handleChangeDataVolta = this.handleChangeDataVolta.bind(
			this
		);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		value: new Date(),
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

	handleChangeDataIda(date){
		this.setState({ startDate: date });
	}
	
	handleChangeDataVolta(date){
		this.setState({ endDate: date });
	}
	  
	async handleSubmit(event) {
		event.preventDefault();
		this.state.data_ida = formatDate(this.state.startDate);
		this.state.data_volta = formatDate(this.state.endDate);
		alert(
			'cidade origem: ' +
				this.state.cidade_origem +
				'\n cidade destino: ' +
				this.state.cidade_destino +
				'\n data ida:' +
				this.state.data_ida +
				'\n data volta:' +
				this.state.data_volta
		);
		var res = await getVoos(this.state.cidade_origem, this.state.cidade_destino, this.state.data_ida, this.state.data_volta);
		console.log(res.data);
		// showResults(res2.data);
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}

	state = {
		startDate: new Date(),
		endDate: new Date()
	  };
	 
	handleChange = date => {
		this.setState({
		  date
		});
	};
	
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
							<option value="SAO">São Paulo</option>
							<option value="RIO">
								Rio de Janeiro
							</option>
							<option value="CWB">Curitiba</option>
							<option value="CNF">
								Belo Horizonte
							</option>
						</Select>  
						<DatePicker
							selected={this.state.startDate}
							dateFormat="dd/MM/yyyy"
							onChange={this.handleChangeDataIda}
							locale="pt"
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
							<option value="SAO">São Paulo</option>
							<option value="RIO">
								Rio de Janeiro
							</option>
							<option value="CWB">Curitiba</option>
							<option value="CNF">
								Belo Horizonte
							</option>
						</Select>
						<DatePicker
							selected={this.state.endDate}
							dateFormat="dd/MM/yyyy"
							onChange={this.handleChangeDataVolta}
							locale="pt"
							/>

					</div>
					<Button onClick={this.handleSubmit}>Pesquisar</Button>
				</form>
				<div id="resulta-pesquisa">
				{/* {this.state.passeios.length > 0 && (
					<TravelsSearch passeios={this.state.passeios} />
				)} */}
				</div>
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

async function getVoos(cidadeOrigem, cidadeDestino, dataIda, dataVolta) {
	if(dataVolta == "NaN-NaN-NaN"){
		var flights =  await axios({
			method: 'GET',
			url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap',
			
			headers: {
				"x-access-token": "15a20173bc9561f1d4f8c7f7ee9f34c4",
				"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
				"x-rapidapi-key": "e0d994b5bbmshb989d25e9770787p1f57fbjsn3be918fcdf61",
				"useQueryString": true
			},

			params: {
				origin: cidadeOrigem,
				destination: cidadeDestino,
				depart_date: dataIda,
				page: 'None',
				currency: 'BRL'
			}
		})
	} else {
		var flights =  await axios({
			method: 'GET',
			url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap',
			
			headers: {
				"x-access-token": "15a20173bc9561f1d4f8c7f7ee9f34c4",
				"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
				"x-rapidapi-key": "e0d994b5bbmshb989d25e9770787p1f57fbjsn3be918fcdf61",
				"useQueryString": true
			},

			params: {
				origin: cidadeOrigem,
				destination: cidadeDestino,
				depart_date: dataIda,
				return_date: dataVolta,
				page: 'None',
				currency: 'BRL'
			}
		})
	}

	return flights;
}

export default connect(mapStateToProps, actions)(Travels);
