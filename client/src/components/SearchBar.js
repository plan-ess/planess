import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

    handleQueryChange = e => {
        this.props.setQuery(e.target.value)
    }

    handleChange = e => {
        this.props.setUrgent(e.target.checked)
    }


    render() {
        return (
            <div className='searchContainer'>
                <input
                    type='text'
                    value={this.props.query}
                    placeholder='Search items'
                    onChange={this.handleQueryChange}
                />

                <label>Only Urgent:</label>
                <input
                    type='checkbox'
                    checked={this.props.urgent}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
