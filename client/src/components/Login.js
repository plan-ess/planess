import React, { Component } from 'react'
import { login } from '../services/auth';
import loginImg from '../images/login-img.jpeg';


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
					console.log(this.props.user,"im here");
					if (!this.props.user.household){
						this.props.history.push('/createOrJoinHousehold');
					} else{
						console.log("i am here, where there is a household, even tho false")
						this.props.history.push('/household')
					}

				}
			})
	}

	render() {
		return (
			<section className='formContainer'>
				<p className="fontFix"> Welcome Back! Remember that you can share your Household with more people, to help you never forget any item in your shopping session!</p>

				<div className="mainLayoutForm">
					<div className = "rightLayout">
						<img src={loginImg} alt='login-img'></img>
					</div>
					<form className= "formToEdit" onSubmit={this.handleSubmit}>

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

						<button type="submit">Log in!</button>
						{this.state.message && (
							<h3>{this.state.message}</h3>
						)}
					</form>
					
				</div>
			</section>
		)

	}
}