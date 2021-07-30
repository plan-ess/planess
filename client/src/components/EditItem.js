import React, { Component } from 'react'

export default class EditItem extends Component {
    render() {
        return (
            <form className='formToEdit addForm' onSubmit={this.props.handleSubmit}>
                <div className="formBox">
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.props.name}
                        onChange={this.props.handleChange}
                    />
                </div>

                <div className="formBox">
                    <label htmlFor='quantity'>Quantity:</label>
                    <input
                        type='number'
                        name='quantity'
                        value={this.props.quantity}
                        onChange={this.props.handleChange}
                    />
                </div>

                <div className="formBox">
                    <label htmlFor='quantityType'>Quantity Type:</label>
                    <input
                        type='text'
                        name='quantityType'
                        value={this.props.quantityType || false} 
                        onChange={this.props.handleChange}
                    />
                </div>
                
                <div className="formBox">
                    <label htmlFor='urgent'>Is it urgent?:</label>
                    <input
                        type='checkbox'
                        name='urgent'
                        checked={this.props.urgent}
                        onChange={this.props.handleChange}
                    />
                </div>

                <button className='editBttn' type='submit'>Confirm</button>
            </form>
        )
    }
}
