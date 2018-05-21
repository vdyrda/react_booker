import React from 'react';
import axios from 'axios';

import '../../components/UI/common.css';
import './Departments.css';

import DepartmentAdd from './DepartmentAdd/DepartmentAdd';

class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			maxId: 2, // TODO change to 0
			depts: [
				{id: 1, name: 'WEB UI', password: '555'},
				{id: 2, name: 'Designers', password: '555'}
			]
		};
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response);
			});

	}

	createDept(dept = {}) {
		if (dept.name && dept.password) {
			this.setState( (prevState, dept) => {
				let newDepts = [...prevState.depts];
				newDepts.push({ id: prevState.maxId + 1, name: dept.name, password: dept.password });
				return {
					maxId: prevState.maxId + 1,
					depts: newDepts
				};
			});
		}
	}

	updateDept(event) {

	}

	removeDept(event) {

	}

	render () {
		const Depts = (
			<ul className="Depts">
				{this.state.depts.map( dept => <li className="Dept tr" key={dept.id}>
					<span className="Dept-name td">
						{dept.name}
					</span>
					<span className="Dept-actions td">
						<button className="btn" onClick={this.updateDept}>Редактировать</button>
						<button className="btn" onClick={this.removeDept}>X</button>
					</span>
				</li>)}
			</ul>
		);

		return (
			<div className="Depts-wrap">
				<div className="h2">Отделы</div>
				<DepartmentAdd changed={this.createDept}/>
				{Depts}
			</div>
		);
	}
}

export default Departments;