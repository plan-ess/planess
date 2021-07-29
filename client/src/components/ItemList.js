import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Apple from '../images/apple.png';
import './ItemList.css';


export default class ItemList extends Component {


    deleteItem = (id) => {
		axios.delete(`/api/items/${id}`)
			.then(() => {
				this.props.getItems()
			})
			.catch(err => console.log(err))
	}

    

    render() {
        let filtered = this.props.items.filter(item => {
            return item.name.toLowerCase().includes(this.props.query.toLowerCase())
        });

		if (this.props.urgent) {
			filtered = filtered.filter(item => {
				return item.urgent
			})
		}
			
		


        return (
            <div>
			{this.props.items.length < 0 && <h2>You have no Items added in your Shopping list</h2>}
			{filtered.map(item => {
				return (
					<div className="listItem" key={item._id}>
						<img className="listIcon" src={Apple}></img>
						<div>
						<Link to={`/household/items/${item._id}`}><h3>{item.name}</h3></Link>
                        <p>{item.quantity} {item.quantityType}</p>
                        <p>Added by: {item.addedBy}</p>
                        <p>{item.addedAt.slice(0,10)}</p>
                        {item.urgent ? <p><b>URGENT!</b></p> : <></>}
						</div>

                        <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                        
					</div>
				)
			})}
		</div>
        )
    }
}
