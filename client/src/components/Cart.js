import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';

class Cart extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}
	}
	render() {
		return (
			<div>
				<Row>
					<Col m={6} s={12}>
						<Card
							actions={[
								<a key="2" href="#">
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

export default connect(mapStateToProps)(Cart);
