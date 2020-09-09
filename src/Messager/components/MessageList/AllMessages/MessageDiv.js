import React,{ Component } from 'react'

class MessageDiv extends Component{
    render()
    {
        return(
            
            <div data-tooltip="bla bla" className={this.props.cls}>
                <div>
                     <span>{this.props.msg}</span>
                </div>
           
            </div>
        )
    }
}
export default MessageDiv