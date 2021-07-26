import axios from 'axios';

const itemCreate = (name, quantity, quantityType, addedBy) => {
	return axios.post('/api/items/', {name, quantity, quantityType, addedBy})
		.then(response => {
			return response.data
		})
		.catch(err => {
			return err
		})
}


export { itemCreate };
