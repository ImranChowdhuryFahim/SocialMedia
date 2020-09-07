import React, { Component } from 'react'
import Navbar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login'

class App extends Component{
    render()
    {
        return(<div>
            <Navbar></Navbar>
            <Login></Login>
            </div>
        )
    }
}

export default App