import React, { Component } from 'react'
import axios from 'axios';
import EditProfile from './EditProfile';

export default class Profile extends Component {

    state = {
        name:'',
        email:'',
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


    componentDidMount() {
        this.getHousehold();
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.user !== this.state.user){
    //         this.fetchData(this.props.user)
    //     }   
    // }
     //sadness

    getHousehold = () => {
        axios.get('/api/household')
        .then(response => {
            console.log(response.data, "alan's attempt");
            this.setState({
                household: response.data
            })
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, email} = this.state;
        axios.put(`/api/household/profile`, {
            name,
            email,
            //password one day
        })
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    editForm: false
                })
                this.props.setUser(response.data)
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        console.log(this.state.household, ":(")


        if (!this.state.household) return <> </> //pesadez
        return (
            <>
              <h1>Welcome to {this.state.household.name}</h1>
              <h3>Name: {this.state.user.name}</h3>  
              <h3>Email: {this.state.user.email}</h3>

              <button onClick={this.toggleEditForm}>Edit</button>

              {this.state.editForm && (
                  <EditProfile
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
              )}
            </>
        )
    }
}
