import React, { Component } from 'react';
import { itemCreate } from '../services/items';
import './AddItem.css';


export default class AddItem extends Component {

    state = {
        name : '',
        quantity : '',
        quantityType : '',
        addedBy : '',
        urgent : false
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
		const { name, quantity, quantityType, urgent} = this.state;
        const addedBy = this.props.user.name

		itemCreate(name, quantity, quantityType, addedBy, urgent)
			.then(response => {
                    this.setState({
                        name:'',
                        quantity:'',
                        quantityType:'',
                        addedBy:''
                    })
                    this.props.getItems()
			})
	}

    render() {
        return (
            <form className='formToEdit addForm' onSubmit={this.handleSubmit}>
                <div className="formBox">
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="formBox">
                    <label htmlFor='quantity'>Quantity:</label>
                    <input
                        type='number'
                        name='quantity'
                        value={this.state.quantity}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="formBox">
                    <label htmlFor='quantityType'>Quantity Type:</label>
                    <input
                        type='text'
                        name='quantityType'
                        value={this.state.quantityType}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="formBox">
                    <label htmlFor='urgent'>Is it urgent?:</label>
                    <input
                        type='checkbox'
                        name='urgent'
                        value={this.state.urgent}
                        onChange={this.handleChange}
                    />
                </div>

                <button className='submitBttn' type='submit'>Add</button>
            </form>
        )
    }
}
