import React, { Component } from 'react'
import ShoppingList from './ShoppingList';

export default class Household extends Component {
    render() {
        return (
            <>
                <h2>Hello, {this.props.user.name}!</h2>
                <ShoppingList user= {this.props.user} />
            </>
        )
    }
}
