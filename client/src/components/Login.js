import React, { Component } from 'react'
import { login } from '../services/auth';

export default class Login extends Component {

	state = {
		name: '',
		email: '',
		password: '',
		message: ''
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		login(email, password)
			.then(response => {
				if (response.message) {
					this.setState({
						message: response.message,
						email: '',
						password: ''
					})
				} else {
					// user is correctly signed up in the backend
					// -> we want to add the user also in the state of App.js
					this.props.setUser(response);
					// redirect to /projects
					this.props.history.push('/projects');
				}
			})
	}

	render() {
		return (
			<>
				<h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">name: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<label htmlFor="email">email: </label>
					<input
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button type="submit">Login</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</>
		)

	}
}