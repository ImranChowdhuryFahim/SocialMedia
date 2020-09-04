import React,{ Component ,useContext} from 'react'
import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ChatHeadDiv from '../ChatHeadDiv/ChatHeadDiv'
import ContactHead from '../ContactHead/ContactHead'
import {ChatContext} from '../../../data'

class Contacts extends Component{
    constructor(props,context)
    {
        super(props,context)
        this.state={ showchathead: true ,
                     search: '',
                    //  activeid: context.currentactive
         }
    }

    add()
    {
        console.log(this.state.showchathead)
        this.setState({ showchathead: true });
    }

    remove()
    {   
        console.log(this.state.showchathead)
        this.setState({ showchathead: false });
    }

    updatesearch(e)
    {
        
        console.log(this.state.search)
        this.setState({ search: e.target.value });
    }
    
     onItemClick(e) {
        // this.setState({ activeid: e.currentTarget.dataset.id });
        this.context.updateCurrentActive(e.currentTarget.dataset.id)
    }

    
    
     
    render()
    {
        
        const check=this.state.showchathead
        let section
        console.log(this.context)
       
        let chatheads=this.context.chatheads
        let filtersearch=this.context.chatheads.filter((contact)=> {
          return  contact.Name.toLowerCase().indexOf(this.state.search)!==-1
        })
        

        if(check){
            section=chatheads.map(chats=>(
            <li data-id={chats.Id} onClick={this.onItemClick.bind(this)} className={chats.Id==this.context.currentactive?"on":"off"}> <ChatHeadDiv id={chats.Id}  name={chats.Name} lastmsg={chats.LastMessage} time={chats.Time} src={chats.Src}  ></ChatHeadDiv></li>
                
            ))

            section=<ul>
                {section}
            </ul>
            
        }

        else{
            section= filtersearch.map(chats=>(
                <li data-id={chats.Id} onMouseDown={this.onItemClick.bind(this)} className="Contactshead">  <ContactHead key={chats.Id} name={chats.Name} src={chats.Src} ></ContactHead></li>
            ))
            
            section=<div>
            <div className="Label">
                    Contacts
                </div>
            <ul>
                {section}
            </ul>
            </div>
        }
         

        return(
            
            <div className="Contacts">
                
                
                <div className="Search">
                <FontAwesomeIcon icon={faSearch} className="Icon" />
                <input className="Round" placeholder="Search Messenger" onFocus={this.remove.bind(this)} onBlur={this.add.bind(this)} onChange={this.updatesearch.bind(this)}></input>
                
                </div>
                
                {section}
             
            </div>
            
        )
    }
}
Contacts.contextType=ChatContext

export default Contacts