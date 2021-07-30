import React, { Component } from 'react'
import { signupHousehold } from '../services/auth';

export default class CreateHousehold extends Component {

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
				<p className="fontFix"> Welcome, {this.props.user.name}! In order to create a household, please enter a name, unique username and pin to share it with everyone at home</p>
				
				<form className='formToEdit' onSubmit={this.handleSubmit}>
					<div className="formBox">
						<label htmlFor="name">Name your Household: </label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>

					<div className="formBox">
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>

					<div className="formBox">
						<label htmlFor="pin">Set a 4-digit pin: </label>
						<input
							type="password"
							name="pin"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					
					<button type="submit">Create!</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</section>
		)

	}
}