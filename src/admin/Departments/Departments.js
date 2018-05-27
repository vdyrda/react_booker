import React from 'react';
import axios from '../../components/axios';
import { Map } from 'immutable';

import Aux from '../../hoc/_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';
import NewDepartment from './NewDepartment/NewDepartment';

import '../../components/UI/common.css';
import './Departments.css';


class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = Map({
			loading: true,
			writing: false,
			depts: null,
			confirmShow: false
		});
		this.confirmMessage = '';
	}

	componentDidMount() {
		console.log('[Department]: componentDidMount '+Date.now());
		axios.get('/departments.json')
			.then(res => {
				this.setState({loading: false});
				const fetchedDepartments = [];
				for (let id in res.data) {
					res.data[id].id = id;
					fetchedDepartments.push(res.data[id]);
				}
				this.setState({loading: false, depts: fetchedDepartments});
			})
			.catch(err => {
				this.setState({loading: false});
			});
	}

	createDept = (name, password) => {
		const dept = {name, password};
		console.log('name = '+name+', pass = '+password);
		if (dept.name !== '' && dept.password !== '') {
			const id = Date.now();
			let newDept = {[id]: dept};
			console.log(newDept);
			// try to write data to server
			this.setState({writing : true});

			axios.post('/departments.json', newDept)
				.then(response => {
					// set state
					const deptsUpdated = this.state.depts.merge(newDept);
					this.setState({depts: deptsUpdated});
					this.setState({writing : false});
				})
				.catch(error => {
					this.setState({ error: true, errorData: error});
					this.setState({writing : false});
				});
		}
	}

	updateDept(event) {

	}

	removeDept(id, deptName) {
		this.confirmMessage = 'Будет удалён отдел: ' + deptName + '. Подтверждаете?';
		this.setState({confirmShow: true});
		//document.getElementById('Modal').modal();
		//if (confirm('Будет удалён отдел: ' + deptName + '. Подтверждаете?')) {
			//const deptsUpdated = this.state.depts.delete(id);
			//this.setState(deptsUpdated);
		//}
	}

	onConfirmClose(answer) {
		console.log(answer);
		this.confirmMessage = '';
		this.setState({confirmShow: false});
	}

	render () {
		const Depts = this.state.depts ? (
			<table className="table table-hover">
				<tbody>
					{
						this.state.depts.map( (dept) => (
							<tr key={dept.id}>
								<td>{dept.name}</td>
								<td className="Dept-actions">
									<button
										className="btn btn-secondary"
										onClick={this.updateDept}>Редактировать</button>
									<button
										className="btn btn-secondary"
										data-toggle="Ne-modal"
										data-target="Ne-#Modal"
										onClick={(id) => this.removeDept(dept.id, dept.name)}>X</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		) : null;

		//const modal = <Modal onClose={this.onModalClose}>Подтверждаете удаление отдела?</Modal>;

		return (
			<Aux>
				<Modal show={this.confirmShow} modalClosed={this.onConfirmClose}>
					<p>{this.confirmMessage}</p>
				</Modal>
				<div className="Depts-wrap">
					<h2>Отделы</h2>
					<NewDepartment onSave={this.createDept} />
					{Depts}
				</div>
			</Aux>
		);
	}
}

export default Departments;