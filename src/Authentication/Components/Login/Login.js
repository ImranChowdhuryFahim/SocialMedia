import React, { Component } from 'react'
import "../../Auth.css"
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor()
    {
        super()
        this.state = {
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
            <h1 className="SignIn">Sign In</h1>
     <form className="LoginForm" onSubmit={this.handleSubmit.bind(this)}>
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
        <button className="LoginButton" type="submit">Login</button>
      </form>
      <p className="LoginBottom">Don't have any account?  <Link className="SignUpLink" to='/register'><span className="SignUpLink">Sign Up</span></Link></p>
      </div>
    
        )
    }
}

export default Login