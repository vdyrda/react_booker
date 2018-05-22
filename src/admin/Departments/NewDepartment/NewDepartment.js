import React from 'react';

import './NewDepartment.css';

class NewDepartment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			value: []
		};
	}

	addButtonToggle() {
		const showForm_new = !this.state.showForm;
		this.setState({ showForm: showForm_new });
	}

	onChanged(event, key) {
		let newField = {};
		newField[key] = event.target.value;
		this.setState({value: newField});
		console.log(this.state);
	}

	render() {
		const content = this.state.showForm ? (
			<div className="form-row">
				<div className="col-2">
					<input className="form-control" placeholder="Название отдела" name="name" type="text" onChange={(event) => this.onChanged(event, 'name')} />
				</div>
				<div className="col-2">
					<input className="form-control" placeholder="Пароль" name="pass" type="password" onChange={(event) => this.onChanged(event, 'password')} />
				</div>
				<div className="col-2">
					<button className="btn btn-primary" onClick={() => this.props.createDept()}>Сохранить</button>
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