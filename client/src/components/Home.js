import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';
const axios = require('axios');

class Home extends Component {
	componentDidMount() {
		/*if (!this.props.auth) {
			this.props.history.push(`/`);
		}*/
		var hotelState = getHotelState();
		console.log(hotelState);
	}

	render() {
		return (
			<div>
				<Row>
					<Col m={6} s={12}>
						<Card
							className="purple"
							textClassName="white-text"
							title="Carrinho"
						>
							<p>As informações de sua proxima viagem</p>
							<Table>
								<thead>
									<tr>
										<th data-field="name">Item Name</th>
										<th data-field="price">Preço</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Voo</td>
										<td>R$2.500,00</td>
									</tr>
									<tr>
										<td>Hospedagem</td>
										<td>R$4.500,00</td>
									</tr>
									<tr>
										<td>Atrações</td>
										<td>R$1.500,00</td>
									</tr>
									<tr />
									<tr>
										<td>Total</td>
										<td>R$8.500,00</td>
									</tr>
								</tbody>
							</Table>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

async function getHotelState() {
	var res = await axios.get('/api/hotel');
	return res;
}

async function saveHotelState() {
	var res = await axios({
		method: 'post',
		url: '/api/hotel',
		data: {
			hotel_name: 'canabrava',
			data_checkin: '02-12-2021',
			data_checkout: '15-01-2022',
			qtd_pessoas: '3',
		},
	});
	return res;
}

export default connect(mapStateToProps)(Home);
