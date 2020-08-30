import React, { Component } from "react";
import styles from "../styles/BodySection.module.css";
import ChatHead from "./ChatHead";
import FullConversation from "./FullConversation";
import MediaSection from "./MediaSection";

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
