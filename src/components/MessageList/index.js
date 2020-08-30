import React from "react";
import Toolbar from "./toolbar/Toolbar";
import ComposeMessage from "./compose-message/ComposeMessage";
import AllMessages from "./AllMessages/AllMessages";

const MessageList = () => (
  <>
    <Toolbar />
    <AllMessages />
    <ComposeMessage />
  </>
);

export default MessageList;
