import React, { Component } from 'react'

export default class EditItem extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'
                    value={this.props.name}
                    onChange={this.props.handleChange}
                />

                <label htmlFor='quantity'>Quantity:</label>
                <input
                    type='number'
                    name='quantity'
                    value={this.props.quantity}
                    onChange={this.props.handleChange}
                />

                <label htmlFor='quantityType'>Quantity Type:</label>
                <input
                    type='text'
                    name='quantityType'
                    value={this.props.quantityType}
                    onChange={this.props.handleChange}
                />

                <button type='submit'>Confirm</button>
            </form>
        )
    }
}
