import React, { Component } from 'react'
import Navbar from './Components/NavBar/NavBar'
import SignUp from './Components/SignUp/SignUp'

class App extends Component{
    render()
    {
        return(<div>
            <Navbar></Navbar>
            <SignUp></SignUp>
            </div>
        )
    }
}

export default App