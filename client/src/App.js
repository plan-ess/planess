import './App.css';
import React from 'react';
import Signup from './components/Signup';
//import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import { Route, Redirect } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NavBar from './components/NavBar';
import CreateHousehold from './components/CreateHousehold';
import JoinHousehold from './components/JoinHousehold';
import Household from './components/Household';
import ItemDetails from './components/ItemDetails';

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
        <NavBar user={this.state.user} setUser={this.setUser}/>

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
          render={props => <CreateHousehold user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
          />  


        <Route
          exact path='/loginHousehold'
          render={props => <JoinHousehold  user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
        />

        <Route
          exact path='/household'
          render={props => {
            if (this.state.user) return <Household user= {this.state.user} {...props} />
            else return <Redirect to='/' />
          }}
          />

          <Route 
            exact path='/household/items/:id'
            render={props => {
              if (this.state.user) return <ItemDetails user= {this.state.user} {...props} />
              else return <Redirect to='/'/>
            }}
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