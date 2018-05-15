import React, { Component } from 'react';

import Hall from './Hall/Hall';

import './Halls.css';

class Halls extends Component {
	state = {
		activeId : null,
		halls : [
			{id: 1, name: 'Конференц 1'},
			{id: 2, name: 'Конференц 2'}
		]
	};

	onHallClickHandler = (event) => {
		this.setState({ activeId: +event.target.id });
	};

	render () {
		const halls = this.state.halls.map( hall => {
			const className = (hall.id === this.state.activeId) ? ' -active' : '';
			return <Hall className={className} key={hall.id} id={hall.id} name={hall.name} onHallClicked={this.onHallClickHandler} />
		});

		return (
			<div className='Halls'>
				{halls}
			</div>
		);
	}
}

export default Halls;