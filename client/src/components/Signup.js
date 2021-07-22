import React, { Component } from 'react'
import { signup } from '../services/auth';

export default class Signup extends Component {

	state = {
		email: '',
        name: '',
		password: '',
		message: ''
	}

	handleNameChange = e => {
		this.setState({
			name: e.target.value
		})
	}

	handleEmailChange = e => {
		this.setState({
			email: e.target.value
		})
	}

	handlePasswordChange = e => {
		this.setState({
			password: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const { name, email, password } = this.state;
		signup(name, email, password)
			.then(response => {
				if (response.message) {
					this.setState({
						message: response.message,
						name: '',
                        email: '',
						password: ''
					})
				} else {
					// user is correctly signed up in the backend
					// -> we want to add the user also in the state of App.js
					this.props.setUser(response);
					// redirect to /projects
					this.props.history.push('/');
				}
			})
	}

	render() {
		return (
			<>
				<h2>Signup</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">name: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
                    <label htmlFor="email">email: </label>
					<input
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.handleEmailChange}
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>
					<button type="submit">Signup</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</>
		)

	}
}