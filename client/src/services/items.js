import axios from 'axios';

const itemCreate = (name, quantity, quantityType, addedBy, urgent) => {
	return axios.post('/api/items/', {name, quantity, quantityType, addedBy, urgent})
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}


export { itemCreate };
