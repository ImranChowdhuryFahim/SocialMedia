import React, { useContext, useState } from "react";
import { css } from "emotion";
import ScrollToBottom from "react-scroll-to-bottom";
import "./style.css";
import { ChatContext } from "../../../data";
import { ThemeContext } from "../../providers/ThemeContext";
import MessageDiv from "./MessageDiv";

const ROOT_CSS = css({
  height: 775,
});

const AllMessages = () => {
  const value = useContext(ChatContext);
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="all-messages" style={{ height: theme.allMessagesHeight }}>
      <ScrollToBottom className={ROOT_CSS}>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Id}
        ></MessageDiv>
        <MessageDiv
          cls="recieved"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Name}
        ></MessageDiv>
        <MessageDiv
          cls="sent"
          msg={value.chatheads[value.currentactive - 1].Id}
        ></MessageDiv>
      </ScrollToBottom>
      {console.log(theme)}
    </div>
  );
};

export default AllMessages;
