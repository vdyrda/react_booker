import React, { Component } from 'react';

import '../../components/UI/common.css';
import './Departments.css';

class Departments extends Component {
	state = {
		maxId: 2, // TODO change to 0
		depts: [
			{id: 1, name: 'Web UI', password: ''},
			{id: 2, name: 'Design', password: ''}
		]
	};

	createDept(dept = {}) {
		if (dept.name && dept.password) {
			const newMaxId = this.state.maxId + 1;
			let newDepts = [...this.state.depts];
			newDepts.push({ id: newMaxId, name: dept.name, password: dept.password });
			this.setState({
				maxId: newMaxId,
				depts: newDepts
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
				<div className="Depts-actions">
					<label className="btn">Добавить новый</label>
					<input placeholder="Название отдела" name="deptName" type="text" />
					<input placeholder="Пароль" name="deptName" type="password" />
					<button className="btn" onClick={this.createDept}>Сохранить</button>
				</div>
				{Depts}
			</div>
		);
	}
}

export default Departments;