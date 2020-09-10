import React from "react";
import {
  SearchOutlined,
  EditOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import "./style.css";

const MoreAcitonItems = () => {
  return (
    <div className="more-action-items-container">
      <div
        className="more-action-item"
        aria-label="More Actions"
        aria-expanded="true"
        role="button"
        tabindex="0"
      >
        Search in Conversation
        <SearchOutlined />
      </div>
      <div
        className="more-action-item"
        aria-label="More Actions"
        aria-expanded="true"
        role="button"
        tabindex="0"
      >
        Edit Nicknames
        <EditOutlined />
      </div>
      <div
        className="more-action-item"
        aria-label="More Actions"
        aria-expanded="true"
        role="button"
        tabindex="0"
      >
        Change Theme
        <FormatPainterOutlined />
      </div>
      <div
        className="more-action-item"
        aria-label="More Actions"
        aria-expanded="true"
        role="button"
        tabindex="0"
      >
        Change Emoji
        <SearchOutlined />
      </div>
    </div>
  );
};

export default MoreAcitonItems;
