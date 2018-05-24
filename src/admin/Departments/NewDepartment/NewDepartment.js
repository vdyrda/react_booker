import React from 'react';
import { Map } from 'immutable';

import './NewDepartment.css';

class NewDepartment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			dept: Map({name: null, password: null, id: Date.now()})
		};
	}

	addButtonToggle() {
		const showForm = !this.state.showForm;
		this.setState({showForm: showForm});
	}

	onChanged(event) {
		// TODO: Добавить проверку на уникальность имени
		const dept = this.state.dept.set(event.target.name, event.target.value);
		this.setState({dept});
		//console.log('name = '+this.state.dept.get('name')+', password = '+this.state.dept.get('password'));
	}

	render() {
		const content = this.state.showForm ? (
			<div className="form-row">
				<div className="col-2">
					<input tabIndex="1" className="form-control" placeholder="Название отдела" name="name" type="text" onChange={event => this.onChanged(event)} />
				</div>
				<div className="col-2">
					<input tabIndex="2" className="form-control" placeholder="Пароль" name="password" type="password" onChange={event => this.onChanged(event)} />
				</div>
				<div className="col-2">
					<button tabIndex="3" className="btn btn-primary" onClick={() => this.props.createDept(this.state.dept)}>Сохранить</button>
				</div>
			</div>
			) : (
				<button className="btn btn-primary" onClick={() => this.addButtonToggle()}>Добавить новый</button>
			);

		return (
			<div className='NewDepartment'>
				{content}
			</div>
		);
	}
}

export default NewDepartment;