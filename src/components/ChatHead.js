import React,{ Component } from 'react'
import styles from '../styles/ChatHead.module.css'
import Banner from './ChatHeadSubComponents/Banner'

class ChatHead extends Component{
    render()
    {
        return(
            <div className={styles.ChatHead}>
                <Banner></Banner>

                

                
                
            </div>
        )
    }
}

export default ChatHead