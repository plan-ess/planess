import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = e => {
        this.props.setQuery(e.target.value)
    }

    render() {
        return (
            <input
                type='text'
                value={this.props.query}
                placeholder='Search items'
                onChange={this.handleChange}
            />
        )
    }
}
