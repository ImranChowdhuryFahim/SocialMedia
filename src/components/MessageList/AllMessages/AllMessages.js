import React, { useContext, useState } from "react";
import "./style.css";
import { ChatContext } from "../../../data";
import { ThemeContext } from "../../providers/ThemeContext";

const AllMessages = () => {
  const value = useContext(ChatContext);
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className="all-messages" style={{ height: theme.allMessagesHeight }}>
      {value.chatheads[value.currentactive - 1].Name}
      {console.log(theme)}
    </div>
  );
};

export default AllMessages;
