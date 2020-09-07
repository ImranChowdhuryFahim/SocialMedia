import React from "react";
import { Picker } from "emoji-mart";
import onClickOutside from "react-onclickoutside";
import "emoji-mart/css/emoji-mart.css";

const EmojiPicker = ({ setMessage, message, setShowEmojiPicker }) => {
  EmojiPicker.handleOnBlur = () => {
    setShowEmojiPicker(false);
  };
  return (
    <Picker
      set="facebook"
      onSelect={(emoji) => {
        setMessage(message + emoji.native);
      }}
      autoFocus={true}
      color={"red"}
      style={{ position: "absolute", bottom: "50px", right: "20px" }}
    />
  );
};

EmojiPicker.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => EmojiPicker.handleOnBlur,
};

export default onClickOutside(EmojiPicker, clickOutsideConfig); // HOC
