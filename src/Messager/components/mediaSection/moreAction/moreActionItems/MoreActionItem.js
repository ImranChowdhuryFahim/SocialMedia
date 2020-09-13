import React from "react";
import "./style.css";

const MoreActionItem = ({ actionName, children }) => {
  return (
    <div
      className="more-action-item"
      aria-label={actionName}
      aria-expanded="true"
      role="button"
      tabIndex="0"
    >
      {actionName}
      {children}
    </div>
  );
};

export default MoreActionItem;
