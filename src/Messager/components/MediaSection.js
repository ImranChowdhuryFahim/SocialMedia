import React, { Component } from "react";
import styles from "../styles/MediaSection.module.css";
import Media from "./mediaSection/index";

class MediaSection extends Component {
  render() {
    return (
      <div className={styles.MediaSection}>
        <Media />
      </div>
    );
  }
}

export default MediaSection;
