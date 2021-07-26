import React, { Component } from 'react'
import { signup } from '../services/auth';
import './Signup.css';

export default class Signup extends Component {

	state = {
		email: '',
        name: '',
		password: '',
		message: ''
	}

	handleChange = e => {
		const {name, value} = e.target;
		this.setState({
			[name]: value
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
					this.props.history.push('/createOrJoinHousehold');
				}
			})
	}

	render() {
		return (
			<section className="formContainer">
				<h1>Sign up</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
                    <label htmlFor="email">Email: </label>
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
					<button type="submit">Sign up!</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</section>
		)

	}
}