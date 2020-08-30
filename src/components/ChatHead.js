import React,{ Component } from 'react'
import styles from '../styles/ChatHead.module.css'
import Banner from './ChatHeadSubComponents/Banner'
import SearchBar from './ChatHeadSubComponents/SearchBar'
import Contacts from './ChatHeadSubComponents/Contacts'

class ChatHead extends Component{
    render()
    {
        return(
            <div className={styles.ChatHead}>
                
                
                <Banner></Banner>
                
                <SearchBar></SearchBar>

                <Contacts></Contacts>
                

            </div>
            
        )
    }
}

export default ChatHead