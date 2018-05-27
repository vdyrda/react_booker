import React from 'react';

import './NewDepartment.css';

class NewDepartment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			error: null,
			deptName: null,
			deptPassword: null
		};
		this.firstElement = React.createRef(); // React 16.3 новое Context API
	}

	componentDidMount() {
		// TODO: Добиться чтобы фокус заработал
		//this.inputElement.current.focus();
	}

	addButtonToggle = () => {
		this.setState({showForm: !this.state.showForm});
	};

	onChanged = (event) => {
		const newState = {[event.target.name]: event.target.value};
		this.setState(newState);

		if (this.state.error) {
			// Удаляю сообщение об ошибке после его показа
			this.setState({error: null});
		}
	};

	onSave = () => {
		if (this.state.deptName && this.state.deptPassword) {
			// Валидно
			this.props.onSave(this.state.deptName, this.state.deptPassword);
			this.addButtonToggle();
		} else {
			// Валидация не прошла
			this.setState({error: 'Имя и пароль обязательны к заполнению'});
		}
	};

	render() {
		const content = this.state.showForm ? (
			<div className="form-row form-group">
				<div className="col-2">
					<input
						ref={this.firstElement}
						className="form-control"
						placeholder="Название отдела"
						name="deptName"
						type="text"
						onChange={this.onChanged} />
				</div>
				<div className="col-2">
					<input tabIndex="2" className="form-control" placeholder="Пароль" name="deptPassword" type="password" onChange={this.onChanged} />
				</div>
				<div className="col-2">
					<button tabIndex="3" className="btn btn-primary" onClick={this.onSave}>Сохранить</button>
				</div>
			</div>
			) : (
				<button className="btn btn-primary" onClick={this.addButtonToggle}>Добавить новый</button>
			);

		const error = this.state.error ? <div className="alert alert-warning" role="alert">{this.state.error}</div> : null;

		return (
			<div className='NewDepartment'>
				{content}
				{error}
			</div>
		);
	}
}

export default NewDepartment;