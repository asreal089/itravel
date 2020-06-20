import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello there</p>
				<a className="App-link" href="/auth">
					singin with Google
				</a>
			</header>
		</div>
	);
}

export default App;
