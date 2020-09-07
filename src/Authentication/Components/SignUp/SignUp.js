import React, { Component } from 'react'

class SignUp extends Component{
    constructor()
    {
        super()
        this.state = {
            firstname : "",
            lastname : "",
            email : "",
            password : ""
        }
    }

    handleChange(event)
    {
        this.setState({ [event.target.name] : event.target.value })
    }

    handleSubmit(event)
    {
        event.preventDefault()
        console.log(this.state)
    }
    render()
    {
        return(
            <div className="Login">
            <h1 className="SignIn">Sign Up</h1>
            <form className="LoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <label className="LoginLabel" htmlFor="firstname">FirstName</label>
        <input className="LoginInput"
          name="firstname"
          type="text"
          placeholder="Enter your firstname"
          value={this.state.firstname}
          onChange={this.handleChange.bind(this)}
        required/>
            <label className="LoginLabel" htmlFor="lastname">LastName</label>
        <input className="LoginInput"
          name="lastname"
          type="text"
          placeholder="Enter your lastname"
          value={this.state.lastname}
          onChange={this.handleChange.bind(this)}
        required/>
        <label className="LoginLabel" htmlFor="email">Email</label>
        <input className="LoginInput"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleChange.bind(this)}
        required/>
            <label className="LoginLabel" htmlFor="email">Password</label>
        <input className="LoginInput"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={this.handleChange.bind(this)}
          required
        />
        <button className="LoginButton" type="submit">Register</button>
      </form>
        </div>
        )
    }

}

export default SignUp