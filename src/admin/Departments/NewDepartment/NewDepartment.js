import React from 'react';

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
			<div className="addForm">
				<input placeholder="Название отдела" name="name" type="text" onChange={(event) => this.onChanged(event, 'name')} />
				<input placeholder="Пароль" name="pass" type="password" onChange={(event) => this.onChanged(event, 'password')} />
				<button className="btn" onClick={() => this.props.createDept()}>Сохранить</button>
			</div>
			) : (
				<button onClick={() => this.addButtonToggle()} className="btn">Добавить новый</button>
			);

		return (
			<div className='DepartmentAdd'>
				{content}
			</div>
		);
	}
}

export default NewDepartment;