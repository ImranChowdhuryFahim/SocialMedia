import React from "react";
import onClickOutside from "react-onclickoutside";
import './ReactionPicker.css'
import love from "../emojis/heart.png"
import haha from "../emojis/haha.png"
import sad from "../emojis/sad.png"
import like from "../emojis/like.png"
import dislike from "../emojis/dislike.png"
import astonished from '../emojis/astonished.png'
import angry from '../emojis/angry.png'

const ReactionPicker = ({ left, top, width, dir, setMessage , setShowEmojiPicker }) => {
    
    ReactionPicker.handleOnBlur = () => {
    setShowEmojiPicker();
  };
   
  return (
      <div className={'ReactionContainer'} style={{top:top-390}}>
          <div className={'ReactionPickerContainer'}>
              <span><img  onClick={(e)=>{ e.stopPropagation(); setMessage(love); setShowEmojiPicker()}} className={'Reaction'} src={ love } alt="love"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(haha); setShowEmojiPicker(); setShowEmojiPicker()}}  className={'Reaction'} src={ haha} alt="haha"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(astonished); setShowEmojiPicker()}}  className={'Reaction'} src={ astonished } alt="astonished"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(sad); setShowEmojiPicker()}} className={'Reaction'} src={ sad } alt="sad"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(angry); setShowEmojiPicker()}} className={'Reaction'} src={ angry } alt="angry"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(like); setShowEmojiPicker()}} className={'Reaction'} src={ like } alt="like"></img></span>
              <span><img onClick={(e)=>{ e.stopPropagation(); setMessage(dislike); setShowEmojiPicker()}} className={'Reaction'} src={ dislike } alt="dislike"></img></span>
          </div>
      </div>
    
  );
};

ReactionPicker.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => ReactionPicker.handleOnBlur,
};

export default onClickOutside(ReactionPicker, clickOutsideConfig); 
