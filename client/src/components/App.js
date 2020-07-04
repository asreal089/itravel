import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Travels from './Travels';
import FlightSearches from './FlightSearches';
import Lading from './Landing';
import Home from './Home';
import Cart from './Cart';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component={Lading} />
						<Route exact={true} path="/home" component={Home} />
						<Route exact={true} path="/cart" component={Cart} />
						<Route
							exact={true}
							path="/travels"
							component={Travels}
						/>
						<Route exact={true} path="/flightsearches" component={FlightSearches} />

					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
