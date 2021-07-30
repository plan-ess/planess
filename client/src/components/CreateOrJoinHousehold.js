import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './joinorcreate.css';

export default class HCreateOrJoin extends Component {
	render() {
		return (
			<section className="linksJoinOrCreate formToEdit">
				<Link to='/loginHousehold'><h3>Joining an existing household</h3></Link>
                <Link to='/SignupHousehold'><h3> Create a new household</h3> </Link>
			</section>
		)
	}
}