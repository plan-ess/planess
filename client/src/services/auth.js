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

const login = (email, password) => {
	return axios.post('/api/auth/login', { email, password })
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

export { signup, logout, login };
