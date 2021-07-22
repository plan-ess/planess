import React, { Component } from 'react'
import './WelcomePage.css'


export default class WelcomePage extends Component {
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

                    <div>
                        {/* to be replaced with <Link> when the Signup and Login feature is finished */}
                        <a href='./components/Login'>Sign up</a>
                        <a href='./components/Signup'>Log in</a>
                    </div>
                </div>
            </section>
        )
    }
}