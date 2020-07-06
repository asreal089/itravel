import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import { Table } from 'react-materialize';
import { IoIosAddCircleOutline } from 'react-icons/io';
import JSONtoArray from './JSONtoArray';
const axios = require('axios');

class TravelSearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
			cidade_origem: '',
			cidade_destino: '',
			data_ida: '',
            data_volta: '',
            flights: this.props.location.state.flights,
            hotels: this.props.location.state.hotels
        }
    }

	render() {
        this.state.flights = JSONtoArray(this.props.location.state.flights);
        // this.state.hotels = JSONtoArray(this.props.location.state.hotels);

		return (

            <div>
				<h1>Resultados da pesquisa:</h1>
                <p>Cidade de Origem: {this.props.location.state.cidade_origem}</p>
                <p>Destino: {this.props.location.state.cidade_destino}</p>
                <p>Data de Ida: {this.props.location.state.data_ida}</p>
                <p>Data de Volta: {this.props.location.state.data_volta}</p>


                <h2>Passagens Aéreas:</h2>
                <p>{JSON.stringify(this.props.location.state.flights)}</p>
                <h2>Hospedagem:</h2>
                {/* <p>{JSON.stringify(this.props.location.state.hotels)}</p> */}

                {console.log("tipo desse caray:" + typeof this.props.location.state.flights )}
                {console.log("tipo desse caray2: " + typeof this.props.location.state.hotels )}

                {/* {this.state.flights = JSONtoArray(this.props.location.state.flights)} */}
                {/* {this.state.hotels = JSONtoArray(this.props.location.state.hotels)} */}
                {console.log(this.props.location.state.hotels)} 
                {console.log(this.state.hotels)} 

					<Row>
						<Col m={12} s={12}>
							<Card
								className="purple lighten-1"
								textClassName="white-text"
								title={this.state.hotels.term}
							>
								<Table>
									 <tbody>
										{this.state.hotels.suggestions.map((suggestions) => (
                                            <div>

                                                { 
                                                    suggestions.entities.map((entities) =>
                                                    <tr width="100">
                                                        <td width="25%">{entities.name}</td>
                                                        <td width="70%">{entities.caption}</td>
                                                        <td width="5%">
                                                        <IoIosAddCircleOutline
                                                            size={22}
                                                            color="#EEE"
                                                        />
                                                        </td>
                                                    </tr>
                                                    )
                                                }

											</div>
										))}
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

export default connect(mapStateToProps, actions)(TravelSearches);
