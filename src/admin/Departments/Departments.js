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
					fetchedDepartments.push({
						...res.data[key],
						id: key
					});

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
				<NewDepartment createDept={this.createDept}/>
				{Depts}
			</div>
		);
	}
}

export default Departments;