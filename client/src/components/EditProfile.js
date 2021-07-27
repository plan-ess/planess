import React, { Component } from 'react'

export default class EditProfile extends Component {
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

                <label htmlFor='email'>Email:</label>
                <input
                    type='text'
                    name='email'
                    value={this.props.email}
                    onChange={this.props.handleChange}
                />
                <button type='submit'>Confirm</button>
            </form>
        )
    }
}
