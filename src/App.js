import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './App.css';

import Halls from './components/Halls/Halls';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
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