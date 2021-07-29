import React, { Component } from 'react'
import ShoppingList from './ShoppingList';
import './Household.css';


export default class Household extends Component {
    render() {
        return (
            <>
                <div className = "householdPage">
                <h1 className="Intro">Hello, {this.props.user.name}!</h1>
                <ShoppingList user= {this.props.user} />
                </div>
            </>
        )
    }
}
