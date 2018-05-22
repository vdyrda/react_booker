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

	createDept(dept = {}) {
		if (dept.name && dept.password) {
			//  try to write data to server
			this.setState({writing : true});

			/*axios.post()

			this.setState( (prevState, dept) => {
				let newDepts = [...prevState.depts];
				newDepts.push({ id: prevState.maxId + 1, name: dept.name, password: dept.password });
				return {
					maxId: prevState.maxId + 1,
					depts: newDepts
				};
			});
			*/
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
				<NewDepartment createDept={this.createDept}/>
				{Depts}
			</div>
		);
	}
}

export default Departments;