import React, { Component } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

export default class LoggedFull extends Component {

    handleLogout = () => {
        logout().then(() => {
            this.props.setUser(null)
            //push /?
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
                        This is the logged page of the app
                    </p>
                </div>
            </section>
        )
    }
}
