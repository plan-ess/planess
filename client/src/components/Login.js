import React, { Component } from 'react'
import { login } from '../services/auth';

export default class Login extends Component {

	state = {
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
				console.log(response)
				if (response.message) {
					this.setState({
						message: response.message,
						email: '',
						password: ''
					})
				} else {
					this.props.setUser(response);
					this.props.history.push('/household');
				}
			})
	}

	render() {
		return (
			<section className='formContainer'>
				<h2>Log in</h2>
				<form onSubmit={this.handleSubmit}>
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
					<button type="submit">Log in!</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</section>
		)

	}
}