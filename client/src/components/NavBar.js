import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {logout} from '../services/auth';
import logo from '../images/logo-planess.png';


export default class NavBar extends Component {

    handleLogout = () => {
        logout().then(() => {
            this.props.setUser(null)
        })
    }

    render() {
        console.log('this are the props', this.props)
        return (
            <>
                {this.props.user ? (
                    <nav>
                        <div className= "togetherFront">
                            <Link to='/household'><h3>PlanEss</h3></Link>
                        </div>
                        <ul>
                            <li><Link to='/' onClick={() => this.handleLogout()} style={{textDecoration:'none', color:'rgb(236, 217, 238)'}}><h4>Log out</h4></Link></li>
                            <li><Link to='/profile'> See my profile ?? </Link></li>
                        </ul>
                        
                    </nav>
                ) : (
                    <nav>
                        <div className= "togetherFront" >
                            <Link to='/'><h3>PlanEss</h3></Link>

                        </div>
                        <ul>
                            <li><Link to='/signup' style={{textDecoration:'none'}}><h4 ClassName="authbutton2"> Sign up</h4></Link></li>
                            <li><Link to='/login' style={{textDecoration:'none'}}><h4 ClassName="authbutton2">Log in</h4></Link></li>
                        </ul>
                    </nav>
                )}
            </>
        )
    }
}
