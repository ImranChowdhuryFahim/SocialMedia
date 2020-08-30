import React,{ Component } from 'react'
import styles from './styles/Contacts.module.css'
import ChatHeadDiv from './ChatHeadDiv'
import SearchBar from './SearchBar'

class Contacts extends Component{
    render()
    {
        return(
            <div className={styles.Contacts}>
                {/* <div className={styles.Label}>
                    Contacts
                </div> */}
                <SearchBar></SearchBar>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
                <ChatHeadDiv></ChatHeadDiv>
             
            </div>
        )
    }
}

export default Contacts