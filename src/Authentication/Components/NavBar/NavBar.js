import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component{
    render()
    {
        return(
            <nav className="NavContainer">
                 <div className="Logo">Chat App</div>
            </nav>
        )
    }
}

export default NavBar