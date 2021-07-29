import React, { Component } from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

import background from '../images/background.gif';

export default class WelcomePage extends Component {

    render() {

        return (
            <section>
                <div className="mainDiv">
                <div className="backgroundImage">
                    <img src={background} alt='background-img'></img>
                </div>
                <div className='introBox'>
                    <div className='banner'>
                        <h1>PlanEss</h1>
                        <h2> planning your pantry should not be hard</h2>
                        <button className = "signUpUnder"> <Link to="signup"> <span className= "hoverfun"> Start planning Now</span> </Link></button>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
