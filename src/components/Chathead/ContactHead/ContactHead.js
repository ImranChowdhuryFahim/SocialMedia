import React,{ Component } from 'react'
import './ContactHead.css'
import moti from '../AbdMatin.jpg'

class ContactHead extends Component{
    render()
    {
        return(
            <div className="ContactHead">
                <div >
                    <img src={this.props.src} alt="puppy" className="ProfilePic"/>
                </div>
                <div className="ProfileName">
                    <span>{this.props.name}</span>
                </div>

            </div>

        )
    }
}

export default ContactHead