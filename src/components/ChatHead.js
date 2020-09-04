import React,{ Component } from 'react'
import styles from '../styles/ChatHead.module.css'
import Banner from './Chathead/Banner/Banner'
import Contacts from '../components/Chathead/Contact/Contacts'

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