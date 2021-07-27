import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ItemList extends Component {


    deleteItem = (id) => {
		axios.delete(`/api/items/${id}`)
			.then(() => {
				this.props.getItems()
			})
			.catch(err => console.log(err))
	}

    render() {
        return (
            <div>
			{this.props.items.length < 0 && <h2>You have no Items added in your Shopping list</h2>}
			{this.props.items.map(item => {
				return (
					<div key={item._id}>
						<Link to={`/household/items/${item._id}`}><h3>{item.name}</h3></Link>
                        <p>{item.quantity} {item.quantityType}</p>
                        <p>Added by: {item.addedBy}</p>
                        <p>{item.addedAt.slice(0,10)}</p>

                        <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                        
					</div>
				)
			})}
		</div>
        )
    }
}
