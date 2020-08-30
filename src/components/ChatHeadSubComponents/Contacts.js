import React,{ Component } from 'react'
import styles from './styles/Contacts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ChatHeadDiv from './ChatHeadDiv'
import ContactHead from './ContactHead'

class Contacts extends Component{
    constructor()
    {
        super()
        this.state={ showchathead: true }
    }

    add()
    {
        console.log(this.state.showchathead)
        this.setState((state) => ({
            showchathead: true
          }));
    }

    remove()
    {
        console.log(this.state.showchathead)
        this.setState((state) => ({
            showchathead: false
          }));
    }

    render()
    {
        const check=this.state.showchathead
        let section

        if(check){
            section=<div>
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
            <ChatHeadDiv></ChatHeadDiv></div>
        }

        else{
            section=<div>
                <div className={styles.Label}>
                    Contacts
                </div>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
                <ContactHead></ContactHead>
            </div>
        }
         

        return(
            <div className={styles.Contacts}>
                {/* <div className={styles.Label}>
                    Contacts
                </div> */}
                
                <div className={styles.Search}>
                <FontAwesomeIcon icon={faSearch} className={styles.Icon} />
                <input className={styles.Round} placeholder="Search Messenger" onFocus={this.remove.bind(this)} onBlur={this.add.bind(this)}></input>
                
                </div>
                
                {section}
             
            </div>
        )
    }
}

export default Contacts