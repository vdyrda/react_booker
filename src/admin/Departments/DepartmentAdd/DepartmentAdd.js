import React from 'react';

class DepartmentAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false
		};
	}

	addButtonToggle() {
		let showForm_new = !this.state.showForm;
		this.setState({
			showForm: showForm_new
		});
	}

	render() {
		const content = this.state.showForm ? <div className="addForm">
					<input placeholder="Название отдела" name="deptName" type="text" />
					<input placeholder="Пароль" name="deptName" type="password" />
					<button className="btn" onClick={this.createDept}>Сохранить</button>
			</div>
			:
			<label onClick={this.addButtonToggle} className="btn">Добавить новый</label>;

		return (
			<div className='DepartmentAdd'>
				{content}
			</div>
		);
	}
}

export default DepartmentAdd;