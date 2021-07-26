import React, { Component } from 'react'
import { signupHousehold } from '../services/auth';

export default class HCreate extends Component {

	state = {
		name: '',
        username: '',
		pin: '',
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
		const { name, username, pin } = this.state;
		signupHousehold(name, username, pin)
			.then(response => {
				if (response.message) {
					this.setState({
						message: response.message,
						name: '',
                        username: '',
						pin: ''
					})
				} else {
					// user is correctly signed up in the backend
					// -> we want to add the user also in the state of App.js
					console.log("should be saving")
					this.props.setHousehold(response);
					// redirect to /projects
					this.props.history.push('/household');
				}
			})
	}

	render() {
		return (
			<section className="formContainer">
				<h1>Hi {this.props.user.name} !!! </h1>
				<h1>Create a Household</h1>
				
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name your home: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
                    <label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label htmlFor="pin">Set a 4-digit pin: </label>
					<input
						type="password"
						name="pin"
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