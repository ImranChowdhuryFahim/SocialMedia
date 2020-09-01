import React, { Component } from "react";
import styles from "../styles/BodySection.module.css";
import ChatHead from "./ChatHead";
import FullConversation from "./FullConversation";
import MediaSection from "./MediaSection";
import EmojiPicker from "./MessageList/compose-message/EmojiPicker";

class BodySection extends Component {
  render() {
    return (
      <div className={styles.BodySection}>
        <ChatHead></ChatHead>
        <FullConversation />
        <MediaSection></MediaSection>
      </div>
    );
  }
}

export default BodySection;
