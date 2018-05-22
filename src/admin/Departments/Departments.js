import React from 'react';
import axios from '../../components/axios';

import '../../components/UI/common.css';
import './Departments.css';

import NewDepartment from './NewDepartment/NewDepartment';

class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			writing: false,
			depts: []
		};
	}

	componentDidMount() {
		axios.get('/departments.json')
			.then(res => {
				const fetchedDepartments = [];
				for (let key in res.data) {
					const newDept = res.data[key];
					if (newDept) {
						fetchedDepartments.push({
							...newDept,
							id: key
						});
					}
				}
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
			axios.post('/departments', dept.toJS())
				.then(response => {
					let depts = [...this.state.depts];
					depts.push({name: dept.name, password: dept.password, id: +Date()});
					this.setState({depts: depts});
				})
				.catch(error => {
					this.setState({ error: true, errorData: error});
				});
		}
	}

	updateDept(event) {

	}

	removeDept(event) {

	}

	render () {
		const Depts = this.state.depts.length ? (
			<table className="table table-hover">
				<tbody>
				{this.state.depts.map( dept => (
					<tr key={dept.id}>
						<td>
							{dept.name}
						</td>
						<td className="Dept-actions">
							<button className="btn btn-secondary" onClick={this.updateDept}>Редактировать</button>
							<button className="btn btn-secondary" onClick={this.removeDept}>X</button>
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