import React,{useContext} from "react";
import "./style.css";
import {ChatContext} from '../../../data'

const AllMessages = () => {
  const value=useContext(ChatContext)
return <div className="all-messages">{value.chatheads[value.currentactive-1].Name}</div>;
};

export default AllMessages;
