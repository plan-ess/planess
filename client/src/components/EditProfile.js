import React, { Component } from 'react';
import './EditProfile.css';

export default class EditProfile extends Component {
    render() {
        return (
            <form className='formToEdit' onSubmit={this.props.handleSubmit}>
                <div className="formBox editProfile">
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.props.name}
                        onChange={this.props.handleChange}
                    />
                </div>

                <div className="formBox editProfile">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        name='email'
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                </div>

                <button className='editBttn' type='submit'>Confirm</button>
            </form>
        )
    }
}
