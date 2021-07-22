import './App.css';
import React from 'react';
//import Navbar from './components/Navbar';
import Signup from './components/Signup';
//import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App" >

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
        {/* <Route
          exact path='/projects'
          component={Projects}
        /> */}
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