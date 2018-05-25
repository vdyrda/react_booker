import React from 'react';
import axios from '../../components/axios';
import { Map, fromJS } from 'immutable';

import '../../components/UI/common.css';
import './Departments.css';

import NewDepartment from './NewDepartment/NewDepartment';

class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			writing: false,
			depts: Map()
		};
	}

	componentDidMount() {
		axios.get('/departments.json')
			.then(res => {
				this.setState({loading: false});
				/*
				const fetchedDepartments = Map({});
				for (let id in res.data) {
					fetchedDepartments.set(id, res.data[id]);
					console.log('id = '+id+', data = ');
					console.log(res.data[id]);
				}
				*/
				const fetchedDepartments = fromJS(res.data);
				this.setState({loading: false, depts: fetchedDepartments});
			})
			.catch(err => {
				this.setState({loading: false});
			});
	}

	createDept(dept) {
		if (dept.get('name') && dept.get('password')) {
			//  try to write data to server
			this.setState({writing : true});
			axios.post('/departments.json', dept.toJS())
				.then(response => {
					const deptsUpdated = this.state.depts.merge(dept);
					this.setState({depts: deptsUpdated});
				})
				.catch(error => {
					this.setState({ error: true, errorData: error});
				});
		}
	}

	updateDept(event) {

	}

	removeDept(id, deptName) {
		// TODO: Сделать свой <Confirm>
		//if (confirm('Будет удалён отдел: ' + deptName + '. Подтверждаете?')) {
			const deptsUpdated = this.state.depts.delete(id);
			this.setState(deptsUpdated);
		//}
	}

	render () {
		const tbody = this.state.depts.isMap() ? this.state.depts.map( (dept, id) => <tr id={id}>
			<td>
				{dept.get('name')}
			</td>
			<td className="Dept-actions">
				<button className="btn btn-secondary" onClick={this.updateDept}>Редактировать</button>
				<button className="btn btn-secondary" onClick={(id, deptName) => this.removeDept(id, dept.get('name'))}>X</button>
			</td>
		</tr>) : null;

		const Depts = this.state.depts.size ? (
			<table className="table table-hover">
				<tbody>
				{tbody}
				</tbody>
			</table>
		) : null;

		return (
			<div className="Depts-wrap">
				<h2>Отделы</h2>
				<NewDepartment createDept={(dept) => this.createDept(dept)}/>
				{Depts}
			</div>
		);
	}
}

export default Departments;