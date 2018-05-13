import React, { Component } from 'react';

import './App.css';

import Logo from './components/UI/Logo/Logo';
import Nav from './components/UI/Nav/Nav';
import Halls from './components/Halls/Halls';

class App extends Component {
	navHandler(link) {
		console.log(link);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Logo />
					<Nav onClickHandler={this.navHandler} />
					<h1 className="App-title">Бронирование конференц-залов</h1>
				</header>
				<main>
					<Halls />
				</main>
			</div>
		);
	}
}

export default App;