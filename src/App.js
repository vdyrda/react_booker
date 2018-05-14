import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Logo from './components/UI/Logo/Logo';
import Nav from './components/UI/Nav/Nav';

import Departments from './admin/Departments/Departments';
import Halls from './components/Halls/Halls';

class App extends Component {
	navHandler(link) {
		console.log(link);
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<Logo />
						<Nav />
					</header>
					<main className="App-main">
						<h1 className="App-title">Бронирование конференц-залов</h1>
						<Route path='/admin/departments' render={() => <Departments />} />
						<Route path='/admin/halls' render={() => <Halls />} />
						<Route exact path='/' render={() => <Halls />} />
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;