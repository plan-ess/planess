import React, { Component } from 'react'
import { signup } from '../services/auth';
import './Signup.css';
import stressedImage from '../images/stressesShopping.jpeg'

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
				<p className="fontFix"> Did you know around <span>98.2%</span> of households' worldwide forget at least one item per shopping session? </p>

				<div className="mainLayoutForm">
				
				<form className= "formToEdit" onSubmit={this.handleSubmit}>
					<div className="formBox">
					<label htmlFor="name">Name: </label>
					<input
						className="inputEdit"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					</div>
					<div className="formBox">
                    <label htmlFor="email">Email: </label>
					<input
						className="inputEdit"
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					</div>
					<div className="formBox">
					<label htmlFor="password">Password: </label>
					<input
						className="inputEdit"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					</div>
					<button type="submit">Sign up!</button>
					{this.state.message && (
						<h3>{this.state.message}</h3>
					)}
				</form>
				<div className = "rightLayout">
				<img src={stressedImage} alt='stressed-img'></img>
				</div>
				</div>
			</section>
		)

	}
}