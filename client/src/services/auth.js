import axios from 'axios';

const signup = (name, email, password) => {
	return axios.post('/api/auth/signup', {name, email, password })
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}


const signupHousehold = (name, username, pin) => {
	return axios.post('/api/auth/signupHousehold', {name, username, pin})
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}


const login = (name, email, password) => {
	return axios.post('/api/auth/login', {name, email, password })
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}

const loginHousehold = (name, username, pin) => {
	return axios.post('/api/auth/loginHousehold', {name, username, pin })
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}


const logout = () => {
	return axios.delete('/api/auth/logout')
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}

export { signup, logout, login, signupHousehold, loginHousehold };
