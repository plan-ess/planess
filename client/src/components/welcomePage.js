import React, { Component } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default class WelcomePage extends Component {

    handleLogout = () => {
        logout().then(() => {
            this.props.setUser(null)
        })
    }

    render() {

        return (
            <section>
                <div className='banner'>
                    <h1>PlanEss</h1>
                    <h2>This is the tagline</h2>
                </div>
                <div className='intro'>
                    <p>
                        This is the intro of the app
                    </p>

                    <div className='authButtons'>
                        <Link to="/signup" style={{textDecoration:'none'}}><h4>Sign up</h4></Link>
                        <Link to="/login" style={{textDecoration:'none'}}><h4>Log in</h4></Link>

                        <Link to='/' onClick={() => this.handleLogout()}>Logout</Link>
                    </div>
                </div>
            </section>
        )
    }
}
