import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-materialize';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';
import { IoIosAddCircleOutline } from 'react-icons/io';

const axios = require('axios');

class TravelSearches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cidade_origem: '',
			cidade_destino: '',
			data_ida: '',
			data_volta: '',
			flights: [],
			hotels: [],
		};
		this.data = Array.from(this.props.location.state.hotels);
	}

	render() {
		return (
			<div>
				<h1>Resultados da pesquisa:</h1>
				<p>
					Cidade de Origem: {this.props.location.state.cidade_origem}
				</p>
				<p>Destino: {this.props.location.state.cidade_destino}</p>
				<p>Data de Ida: {this.props.location.state.data_ida}</p>
				<p>Data de Volta: {this.props.location.state.data_volta}</p>
				{this.props.location.state.flights.data > 0 && (
					<div>
						<h2>Passagens Aéreas:</h2>
						<p>
							{JSON.stringify(this.props.location.state.flights)}
						</p>
					</div>
				)}
				<h2>Hospedagem:</h2>
				{console.log(this.props.location.state.hotels.suggestions)}
				<div>
					{this.props.location.state.hotels.suggestions.map(
						(passeio) => (
							<Row>
								<Col m={6} s={12}>
									<Card
										className="purple"
										textClassName="white-text"
										title={passeio.group}
									>
										<Table>
											<tbody>
												{passeio.entities.map(
													(entidade) => (
														<tr>
															<td>
																{entidade.type}
															</td>
															<td>
																{entidade.name}
															</td>
															<td>
																<IoIosAddCircleOutline
																	size={22}
																	color="#EEE"
																/>
															</td>
														</tr>
													)
												)}
											</tbody>
										</Table>
									</Card>
								</Col>
							</Row>
						)
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(TravelSearches);
