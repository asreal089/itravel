import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
            hotels: []
        }
    }

	render() {
		return (

            <div>
				<h1>Resultados da pesquisa:</h1>
                <p>{this.props.location.state.cidade_origem}</p>
                <p>{this.props.location.state.cidade_destino}</p>
                <p>{this.props.location.state.data_ida}</p>
                <p>{this.props.location.state.data_volta}</p>
                <p>{this.props.location.state.teste}</p>
                <h2>Passagens Aéreas:</h2>
                <p>{JSON.stringify(this.props.location.state.flights)}</p>
                <h2>Hospedagem:</h2>
                <p>{JSON.stringify(this.props.location.state.hotels)}</p>
                
                {console.log("tipo desse caray:" + typeof this.props.location.state.flights )}
                {console.log("tipo desse caray2: " + typeof this.props.location.state.hotels )}

			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(TravelSearches);
