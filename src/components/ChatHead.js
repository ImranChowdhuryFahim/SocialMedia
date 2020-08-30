import React,{ Component } from 'react'
import styles from '../styles/ChatHead.module.css'
import Banner from './ChatHeadSubComponents/Banner'
import Contacts from './ChatHeadSubComponents/Contacts'

class ChatHead extends Component{
    render()
    {
        return(
            <div className={styles.ChatHead}>
                <Banner></Banner>

                <Contacts></Contacts>
                
            </div>
        )
    }
}

export default ChatHead