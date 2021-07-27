import React, { Component } from 'react';
import AddItem from './AddItem';
import axios from 'axios';
import ItemList from './ItemList';
import SearchBar from './SearchBar';

export default class ShoppingList extends Component {

    state = {
        items : [],
        addForm : false,
        query:''
    }

    setQuery = query => {
        this.setState({
            query: query
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
                <h3>Shopping List:</h3>

                <button onClick={this.toggleAddForm}>Add Item</button>
                        {this.state.addForm ? (
                            <AddItem user={this.props.user} getItems={this.getItems}/>
                        ) : (
                            <></>
                        )}

                <SearchBar 
                    query={this.state.query}
                    setQuery={this.setQuery}
                />

                <ItemList items={this.state.items} getItems={this.getItems} query={this.state.query}/>
            </>
        )
    }
}
