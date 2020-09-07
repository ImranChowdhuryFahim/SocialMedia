import React, { Component } from "react";
import MessageList from "./MessageList";
import styles from "../styles/FullConversation.module.css";

class FullConversation extends Component {
  render() {
    return (
      <div className={styles.FullConversation}>
        <MessageList />
      </div>
    );
  }
}

export default FullConversation;
