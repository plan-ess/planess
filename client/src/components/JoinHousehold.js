import React, { Component } from 'react'
import { loginHousehold } from '../services/auth';

export default class JoinHousehold extends Component {

	state = {
		name: '',
		username: '',
		pin: '',
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
		const { name, username, pin } = this.state;
		loginHousehold(name, username, pin)
			.then(response => {
				console.log(response)
				if (response.message) {
					this.setState({
						message: response.message,
						name: '',
						username: '',
						pin: ''
					})
				} else {
                    //aqui deberia funcionar... y poner household.members al user, y poner agregar el household al user.household
					this.props.setHousehold(response);
					this.props.history.push('/household');
				}
			})
	}

	render() {
			return (
				<section className="formContainer">
					<p className="fontFix"> Welcome, {this.props.user.name}! In order to join an existing Household, please enter the home’s username and pin</p>

					<form className='formToEdit' onSubmit={this.handleSubmit}>
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
							<label htmlFor="pin">4-digit pin: </label>
							<input
								type="password"
								name="pin"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>

						<button type="submit">Join the Household!</button>
						{this.state.message && (
							<h3>{this.state.message}</h3>
						)}
					</form>
				</section>
			)
	
		}
	}