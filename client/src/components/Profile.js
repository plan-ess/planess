import React, { Component } from 'react'
import axios from 'axios';
import EditProfile from './EditProfile';
import './Profile.css';

export default class Profile extends Component {

    state = {
        name:this.props.user.name,
        email:this.props.user.email,
        user: this.props.user,
        household: null,
        editForm: false,
        error: null
    }

    toggleEditForm = () => {
        this.setState(state => ({
            editForm: !state.editForm
        }))
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    getHousehold = () => {
        axios.get('/api/household')
        .then(response => {
            this.setState({
                household: response.data
            })
        })
    }

    getUser = () => {
        axios.get('/api/household/user')
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }


    componentDidMount() {
        this.getUser();
        this.getHousehold();
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, email} = this.state;
        axios.put(`/api/household/profile`, {
            name,
            email
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    editForm: false
                })
                this.props.setUser(response.data)
                this.getUser();
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {


        if (!this.state.household) return <> </>
        return (
            <section className='formToEdit profileSection'>
              <h1>Welcome to {this.state.household.name}</h1>

              <div className='profileInfo'>
                <h3>Name: {this.state.user.name}</h3>  
                <h3>Email: {this.state.user.email}</h3>
              </div>

              <button className='editBttn' onClick={this.toggleEditForm}>Edit info</button>

              {this.state.editForm && (
                  <EditProfile
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
              )}
            </section>
        )
    }
}
