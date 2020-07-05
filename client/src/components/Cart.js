import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';

const axios = require('axios');

class Cart extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}

		this.state = {
			hotel: {
				hotel_name: 'ibs',
				data_checkin: '20-02-2020',
				data_checkout: '20-03-2020',
				qtd_pessoas: '4',
				user: this.props.auth.id,
			},
			flight: {
				qtd_pessoas: '4',
				origem: 'SAO',
				destino: 'Curitiba',
				data_ida: '20-02-2020',
				hora_saida: '20-03-2020',
			},
		};

		//var saveHotel = saveHotelState();
		//console.log(saveHotel);
	}

	render() {
		return (
			<div>
				<Row>
					<Col m={6} s={12}>
						<Card
							actions={[
								<a key="2" href="/home">
									Pagar
								</a>,
							]}
							className="purple"
							textClassName="white-text"
							title="Carrinho"
						>
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

async function saveHotelState() {
	var res = await axios({
		method: 'POST',
		url: '/hotel',
		data: this.state.hotel,
	});
	return res;
}

export default connect(mapStateToProps)(Cart);
