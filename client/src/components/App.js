import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

const Lading = () => <h2>Lading</h2>;
const Home = () => <h2>Home</h2>;
const Cart = () => <h2>Cart</h2>;
const Dashbord = () => <h2>Dashbord</h2>;

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
							path="/dashbord"
							component={Dashbord}
						/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
