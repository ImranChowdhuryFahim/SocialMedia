import React, { useContext, useState } from "react";
import "./style.css";
import { ChatContext } from "../../../data";
import { ThemeContext } from "../../providers/ThemeContext";
import MessageDiv from './MessageDiv'

const AllMessages = () => {
  const value = useContext(ChatContext);
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="all-messages" style={{ height: theme.allMessagesHeight }}>
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="recieved" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
    <MessageDiv cls="sent" msg={value.chatheads[value.currentactive - 1].Name}></MessageDiv>  
      {console.log(theme)}
    </div>
  );
};

export default AllMessages;
