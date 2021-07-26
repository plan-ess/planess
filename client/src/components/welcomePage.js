import React, { Component } from 'react';
import './WelcomePage.css';
import background from '../images/background.gif';

export default class WelcomePage extends Component {

    render() {

        return (
            <section>
                <div className="mainDiv">
                <div className="backgroundImage">
                    <img src={background}></img>
                </div>
                <div className='introBox'>
                    <div className='banner'>
                        <h1>PlanEss</h1>
                        <h2>This is the tagline</h2>
                    </div>
                </div>
                </div>
                <div className='intro'>
                    <p>
                        This is the intro of the app
                    </p>
                </div>
            </section>
        )
    }
}
