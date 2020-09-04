import React ,{ Component , useContext} from 'react'
import  './ChatHeadDiv.css'
import puppy from '../puppy.jpg'


class ChatHeadDiv extends Component{
    render()
    {
        
        return(
           
            <div className="ChatHeadDiv" onClick={this.props.onClick}>
                <div >
                    <img src={ this.props.src } alt="puppy" className="ProfilePicture"></img>
                </div>
                <div className="Details">
                    <div className="ProfileName">
                        <span >
                            {this.props.name}
                        </span>
                    </div>
                    
                    <div className="TimeMsg">
                        <div className="LastMsg">
                            <span >
                                {this.props.lastmsg}
                            </span>
                        </div>
                        .
                        <div className="Time">
                            <span >
                                {this.props.time}
                            </span>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        )
    }
}


export default ChatHeadDiv