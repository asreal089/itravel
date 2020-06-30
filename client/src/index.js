import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<link href="./components/assets/css/gijgo.min.css" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
		<App />
		<script src="./components/assets/js/gijgo.min.js"></script>
		<script src="./components/assets/js/date-picker.js"></script>
	</Provider>,
	document.querySelector('#root')
);
