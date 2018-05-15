import React, { Component } from 'react';

import '../../components/UI/common.css';
import './Departments.css';

class Departments extends Component {
	state = {
		depts: [
			{id: 1, name: 'Web UI', password: ''},
			{id: 2, name: 'Design', password: ''}
		]
	};

	createDept() {

	}

	updateDept(dept_id) {

	}

	removeDept(dept_id) {

	}

	render () {
		const Depts = (
			<ul className="Depts">
				{this.state.depts.map( dept => <li className="Dept">
					<span className="name">
						{dept.name}
					</span>
					<span className="actions">
						<button click={() => this.updateDept(dept.id)}>Edit</button>
						<button click={() => this.removeDept(dept.id)}>Delete</button>
					</span>
				</li>)}
			</ul>
		);
		return (
			<div className="depts-wrap">
				<div className="h2">Отделы</div>
				<div className="depts-actions"><button className="btn-create">Create new</button></div>
				{Depts}
			</div>
		);
	}
}

export default Departments;