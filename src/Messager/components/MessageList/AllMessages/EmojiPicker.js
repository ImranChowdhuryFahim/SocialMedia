import React from "react";
import { Picker } from "emoji-mart";
import onClickOutside from "react-onclickoutside";
import "emoji-mart/css/emoji-mart.css";
const customReactionEmojis = [
            
    {
        name: "heart",
        short_names: ["heart"],
        text: "",
        emoticons: [],
        keywords: ["heart"]
    },
    {
      name: "grin",
      short_names: ["grin"],
      text: "",
      emoticons: [],
      keywords: ["grin"]
    },
    {
        name: "open_mouth",
        short_names: ["open_mouth"],
        text: "",
        emoticons: [],
        keywords: ["open_mouth"]
      },
    {
      name: "cry",
      short_names: ["cry"],
      text: "",
      emoticons: [],
      keywords: ["cry"]
    },
    {
      name: "rage",
      short_names: ["rage"],
      text: "",
      emoticons: [],
      keywords: ["rage"]
    },
    {
        name: "+1",
        short_names: ["+1"],
        text: "",
        emoticons: [],
        keywords: ["thumbsup"]
      },
      {
        name: "-1",
        short_names: ["-1"],
        text: "",
        emoticons: [],
        keywords: ["thumbsdown"]
    }
];

const EmojiPicker = ({ setMessage , setShowEmojiPicker }) => {
  EmojiPicker.handleOnBlur = () => {
    setShowEmojiPicker();
  };
  return (
    <Picker
    set='facebook'
       perLine={7}
       showPreview={false}
       showSkinTones={false}
       include={["custom"]}
       custom={customReactionEmojis} 
       autoFocus={true}
      onSelect={(emoji) => {
        setMessage(emoji.native);
      }}
      
      
    />
  );
};

EmojiPicker.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => EmojiPicker.handleOnBlur,
};

export default onClickOutside(EmojiPicker, clickOutsideConfig); 
