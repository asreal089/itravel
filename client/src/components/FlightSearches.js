import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import JSONtoArray from './JSONtoArray';

const axios = require('axios');

class FlightSearches extends Component {
    constructor(props) {
        super(props);
        this.state = {
			cidade_origem: '',
			cidade_destino: '',
			data_ida: '',
            data_volta: '',
            flights: []
        }
    }

	render() {
		return (

            <div>
				<h1>Hello</h1>
                <p>{this.props.location.state.cidade_origem}</p>
                <p>{this.props.location.state.cidade_destino}</p>
                <p>{this.props.location.state.data_ida}</p>
                <p>{this.props.location.state.data_volta}</p>
                <p>{this.props.location.state.teste}</p>
                <p>{JSON.stringify(this.props.location.state.flights)}</p>
                <p>kakaka</p>
                {/* {this.state.voos = JSONtoArray(this.props.location.state.flights)} */}
                {console.log("tipo desse caray:" + typeof this.props.location.state.flights )}
                {console.log("tipo desse caray2: " + typeof this.state.flights )}
                {console.log(this.props.location.state.flights)}

                <p>{JSON.stringify(this.props.location.state.flights.data.RIO)}</p>

			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(FlightSearches);
