import React from 'react';
import axios from '../../components/axios';
import { Map, Seq } from 'immutable';

import '../../components/UI/common.css';
import './Departments.css';

import NewDepartment from './NewDepartment/NewDepartment';

class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			writing: false,
			depts: null
		};
	}

	componentDidMount() {
		axios.get('/departments.json')
			.then(res => {
				this.setState({loading: false, depts: Map(res.data)});
				/*
				const fetchedDepartments = Map({});
				for (let key in res.data) {
					fetchedDepartments.set(res.data[key]);
				}
				console.log(fetchedDepartments);
				this.setState({loading: false, depts: fetchedDepartments});
				*/
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
		const Depts = this.state.depts ? (
			<table className="table table-hover">
				<tbody>
				{Seq(this.state.depts).map( dept => (
					<tr key={dept.get('id')}>
						<td>
							{dept.get('name')}
						</td>
						<td className="Dept-actions">
							<button className="btn btn-secondary" onClick={this.updateDept}>Редактировать</button>
							<button className="btn btn-secondary" onClick={(id, deptName) => this.removeDept(dept.get('id'), dept.get('name'))}>X</button>
						</td>
					</tr>
					))}
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