import React, { useContext,useRef , useEffect} from "react";
import "./style.css";
import { ChatContext } from "../../../data";
import { ThemeContext } from "../../providers/ThemeContext";
import MessageDiv from "./MessageDiv";

const AllMessages = () => {
  const messagesEnd = useRef(null);
  
  
  const value = useContext(ChatContext);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(()=>{
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' , block: 'nearest' , inline: 'start' });
  })
  
  return (   
                    <div className="all-messages" style={{ height: theme.allMessagesHeight }}>
                    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv> 
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Id}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive -1].Id}></MessageDiv> 
                        <div
                            ref={messagesEnd}
                            style={{ float: "left", clear: "both" }}
                        />
                    </div>
                
  );
};

export default AllMessages;
