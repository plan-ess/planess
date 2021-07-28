import React, { Component } from 'react'
import axios from 'axios';
import EditItem from './EditItem';

export default class ItemDetails extends Component {

    state = {
        item: null,
        name:'',
        quantity:'',
        quantityType:'',
        urgent: false,
        editForm: false,
        error: null
    }

    getItem = () => {
        const id = this.props.match.params.id;
        axios.get(`/api/items/${id}`)
            .then(response => {
                this.setState({
                    item: response.data,
                    name: response.data.name,
                    quantity: response.data.quantity,
                    quantityType: response.data.quantityType,
                    urgent: response.data.urgent
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
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
          [name]: value
        })
      }

    handleSubmit = e => {
        e.preventDefault();
        const { name, quantity, quantityType, urgent } = this.state;
        axios.put(`/api/items/${this.state.item._id}`, {
            name,
            quantity,
            quantityType,
            urgent
        })
            .then(response => {
                this.setState({
                    item: response.data,
                    name: response.data.name,
                    quantity: response.data.quantity,
                    quantityType: response.data.quantityType,
                    urgent: response.data.urgent,
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
              {this.state.urgent ? <h3>URGENT!</h3> : <></>}

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
