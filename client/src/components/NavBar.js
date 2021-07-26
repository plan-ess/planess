import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        console.log('this are the props', this.props)
        return (
            <nav>
                <div>
                    <Link to={this.props.user ? '/household' : '/'}><h3>Plan<span>Ess</span></h3></Link>
                </div>
                <ul>
                    <li><Link to='/signup' style={{textDecoration:'none', color:'rgb(236, 217, 238)'}}><h4>Sign up</h4></Link></li>
                    <li><Link to='/login' style={{textDecoration:'none', color:'rgb(236, 217, 238)'}}><h4>Log in</h4></Link></li>
                </ul>
            </nav>
        )
    }
}
