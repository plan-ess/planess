import './App.css';
import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import Signup from './components/Signup';
//import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NavBar from './components/NavBar';
import HCreate from './components/HCreate';
import HJoin from './components/HJoin';

class App extends React.Component {

  state = {
    user: this.props.user,
    household: this.props.household
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  setHousehold = household => {
    this.setState({
      household: household
    })
  }



  render() {

    return (
      <div>
        <NavBar/>
        <Route
          exact path='/'
          render={props => <WelcomePage setUser={this.setUser} {...props}/>}
        />

        <Route
          exact path="/login"
          render={props => <Login setUser={this.setUser} {...props}/>}
          />

        <Route
          exact path="/signup"
          render={props => <Signup setUser={this.setUser} {...props}/>}
          />

        <Route
          exact path="/signupHousehold"
          render={props => <HCreate user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
          />  


        <Route
          exact path='/loginHousehold'
          render={props => <HJoin  user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
        /> 



        {/* This route is now protected */}
        {/* <Route
          exact path='/projects'
          // here we also use a render prop
          render={props => {
            if (this.state.user) return <Projects {...props} />
            else return <Redirect to='/' />
          }}
        /> */}
        {/* <Route
          exact path='/signup'
          // component={Signup}
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />} */}
        {/* /> */}
      </div>
    );
  }}

export default App;