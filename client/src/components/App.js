import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Lading = () => <h2>Lading</h2>;
const Cart = () => <h2>Cart</h2>;
const Dashbord = () => <h2>Dashbord</h2>;

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact={true} path="/" component={Lading} />
					<Route exact={true} path="/cart" component={Cart} />
					<Route exact={true} path="/dashbord" component={Dashbord} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
