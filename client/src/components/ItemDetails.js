import React, { Component } from 'react'
import axios from 'axios';
import EditItem from './EditItem';

export default class ItemDetails extends Component {

    state = {
        item: null,
        name:'',
        quantity:'',
        quantityType:'',
        editForm: false,
        error: null
    }

    getItem = () => {
        const id = this.props.match.params.id;
        console.log(this.props.match.params.id)
        axios.get(`/api/items/${id}`)
            .then(response => {
                this.setState({
                    item: response.data,
                    name: response.data.name,
                    quantity: response.data.quantity,
                    quantityType: response.data.quantityType
                })

            })
            .catch(err => {
				console.log(err);
				if (err.response.status === 404) {
					this.setState({
						error: 'Item not Found'
					})
				}
			})
    }

    componentDidMount() {
        this.getItem();
    }

    deleteItem = () => {
		axios.delete(`/api/items/${this.state.item._id}`)
			.then(() => {
				this.props.history.push('/household');
			})
			.catch(err => console.log(err))
	}

    toggleEditForm = () => {
        this.setState(state => ({
            editForm: !state.editForm
        }))
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, quantity, quantityType } = this.state;
        axios.put(`/api/items/${this.state.item._id}`, {
            name,
            quantity,
            quantityType
        })
            .then(response => {
                this.setState({
                    item: response.data,
                    name: response.data.name,
                    quantity: response.data.quantity,
                    quantityType: response.data.quantityType,
                    editForm: false
                })
            })

            .catch(err => {
                console.log(err);
            })

    }

    render() {
        if (this.state.error) return <h2>{this.state.error}</h2>
        if (!this.state.item) return <></>
        return (
            <>
              <h3>Item: {this.state.item.name}</h3>  
              <h3>Quantity: {this.state.item.quantity} {this.state.item.quantityType}</h3>
              <h3>Added by: {this.state.item.addedBy} in {this.state.item.addedAt.slice(0,10)}</h3>

              <button onClick={this.deleteItem}>Delete</button>
              <button onClick={this.toggleEditForm}>Edit</button>

              {this.state.editForm && (
                  <EditItem 
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
              )}
            </>
        )
    }
}
