import React, { Component } from 'react'
import Hint from "react-portal-hint";
import "react-portal-hint/dist/default.css"


class MessageDiv extends Component {


    render() {
        
       
        return (

            <div data-tooltip="bla bla" >
                <div className={this.props.cls === 'sent' ? "msgrowsent" : "msgrowrecieved"} >
                    <Hint  content={this.props.msg} place={this.props.dir} >
                    <div className={this.props.cls === 'sent' ? "msgsent" : "msgrecieved"} data-tooltip={this.props.msg}>
                        <span>{this.props.msg}</span>
                    </div>
                    </Hint>
                    <div className={this.props.cls === 'sent' ? "invisibledivsent" : "invisibledivrecieved" }>
                        <span>
                            <Hint content="React" >
                            <button className="svgbutton" data-tooltip="React">
                                <svg  height="22px" width="22px" viewBox="0 0 36 36"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><polygon points="0 36 36 36 36 0 0 0"></polygon><path d="M14.4951,17.5 C13.5576,17.5 12.9951,16.75 12.9951,15.5 C12.9951,14.25 13.5576,13.5 14.4951,13.5 C15.4326,13.5 15.9951,14.25 15.9951,15.5 C15.9951,16.75 15.4326,17.5 14.4951,17.5 M21.4951,17.5 C20.5576,17.5 19.9951,16.75 19.9951,15.5 C19.9951,14.25 20.5576,13.5 21.4951,13.5 C22.4326,13.5 22.9951,14.25 22.9951,15.5 C22.9951,16.75 22.4326,17.5 21.4951,17.5 M18.0071,25.0055 C15.7176,25.0055 13.5461,23.9185 12.1981,22.0985 C11.8691,21.6545 11.9626,21.028 12.4061,20.6985 C12.8491,20.369 13.4756,20.4625 13.8041,20.9065 C14.7766,22.2195 16.3481,23.004 18.0071,23.004 C19.6666,23.004 21.2376,22.2195 22.2101,20.9065 C22.5386,20.4625 23.1656,20.3695 23.6086,20.698 C24.0516,21.0275 24.1451,21.6545 23.8166,22.0985 C22.4686,23.9185 20.2971,25.0055 18.0071,25.0055 M18.0001,8 C12.4771,8 8.0001,12.477 8.0001,18 C8.0001,23.523 12.4771,28 18.0001,28 C23.5231,28 28.0001,23.523 28.0001,18 C28.0001,12.477 23.5231,8 18.0001,8 M18.0001,30 C11.3726,30 6.0001,24.6275 6.0001,18 C6.0001,11.3725 11.3726,6 18.0001,6 C24.6276,6 30.0001,11.3725 30.0001,18 C30.0001,24.6275 24.6276,30 18.0001,30" fill="rgba(0, 0, 0, 0.34)"></path></g></svg>
                            </button>
                            </Hint>
                        </span>
                        <span>
                            <Hint content="Reply">
                            <button className="svgbutton" data-tooltip="Reply" >
                                <svg height="22px" width="22px" viewBox="0 0 36 36"><g id="reply" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><polygon id="Fill-20" points="0 36 36 36 36 0 0 0"></polygon><path id="Fill-19" d="M16.2785894,26.6946832 C17.4409207,27.4920577 18.9988647,26.6347303 18.9988647,25.197358 L18.9988647,21.9938712 C23.9932881,21.9938712 26.8856124,22.9656089 27.8513876,25.9083002 C28.119464,26.7256589 28.5055741,26.989452 28.9662054,26.989452 C29.5883827,26.989452 30,26.5722793 30,25.9782453 C29.9989997,18.2243286 26.1404,14.0011418 18.9988647,14.0011418 L18.9988647,10.8021516 C18.9988647,9.36527885 17.4409207,8.50795146 16.2785894,9.30532589 L5.77909704,16.5026793 C4.74030099,17.2146207 4.74030099,18.7843892 5.77909704,19.4968303 L16.2785894,26.6946832 Z" fill="rgba(0, 0, 0, 0.34)"></path></g></svg>
                            </button>
                            </Hint>
                            </span>
                        <span>
                            <Hint content="More">
                            <button className="svgbutton" data-tooltip="More">
                                <svg height="22px" width="22px" viewBox="0 0 36 36"><g id="dots-3-horizontal" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g id="Page-1" fill="rgba(0, 0, 0, 0.34)"><path id="Fill-1" d="M7,18 C7,16.4815417 8.23154167,15.25 9.75,15.25 C11.2684583,15.25 12.5,16.4815417 12.5,18 C12.5,19.5189167 11.2684583,20.75 9.75,20.75 C8.23154167,20.75 7,19.5189167 7,18 Z M15.25,18 C15.25,16.4815417 16.4815417,15.25 18,15.25 C19.5184583,15.25 20.75,16.4815417 20.75,18 C20.75,19.5189167 19.5184583,20.75 18,20.75 C16.4815417,20.75 15.25,19.5189167 15.25,18 Z M23.5,18 C23.5,16.4815417 24.7315417,15.25 26.25,15.25 C27.7684583,15.25 29,16.4815417 29,18 C29,19.5189167 27.7684583,20.75 26.25,20.75 C24.7315417,20.75 23.5,19.5189167 23.5,18 Z"></path></g></g></svg></button>
                                </Hint>
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}
export default MessageDiv