import React, { Component } from 'react';
import AddItem from './AddItem';
import axios from 'axios';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import "./ShoppingList.css"

export default class ShoppingList extends Component {

    state = {
        items : [],
        addForm : false,
        query:'',
        urgent: false
    }

    setQuery = query => {
        this.setState({
            query: query
        })
    }

    setUrgent = urgent => {
        this.setState({
            urgent: urgent
        })
    }

    toggleAddForm = () => {
		this.setState(state => ({
			addForm: !state.addForm
		}))
	}

    getItems = () => {
        axios.get('/api/items').then(response => {
            this.setState({
                items: response.data.basket
            })
        })
    }

    componentDidMount() {
        this.getItems()
    }


    render() {
        return (
            <>
                <h3 className="title"> Shopping List:</h3>
                <div className="mainShoppingList">
                <div className="firstSLdivision">
                <button onClick={this.toggleAddForm}>Add Item</button>
                        {this.state.addForm ? (
                            <AddItem user={this.props.user} getItems={this.getItems}/>
                        ) : (
                            <></>
                        )}

                <SearchBar 
                    query={this.state.query}
                    urgent={this.state.urgent}
                    setQuery={this.setQuery}
                    setUrgent={this.setUrgent}
                />
                </div>
                <div className = "secondSLdivision">
                <ItemList items={this.state.items} getItems={this.getItems} query={this.state.query} urgent={this.state.urgent}/>
                </div>
                </div>
            </>
        )
    }
}
