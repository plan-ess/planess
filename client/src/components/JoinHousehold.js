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
					this.props.history.push('/');
				}
			})
	}

	render() {
		return (
			<section className='formContainer'>
				<h2>Log in</h2>
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
					<button type="submit">Log in!</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
			</section>
		)

	}
}