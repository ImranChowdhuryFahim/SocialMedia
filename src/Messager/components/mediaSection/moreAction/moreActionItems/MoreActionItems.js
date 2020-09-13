import React from "react";
import Icon, {
  SearchOutlined,
  EditOutlined,
  FormatPainterOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import MoreActionItem from "./MoreActionItem";

import "./style.css";

const MoreAcitonItems = () => {
  const actionItemsArray = [
    { title: "Search in Conversation", icon: <SearchOutlined /> },
    { title: "Edit Nicknames", icon: <EditOutlined /> },
    { title: "Change App Theme", icon: <FormatPainterOutlined /> },
    { title: "Set Message Color", icon: <BgColorsOutlined /> },
  ];
  return (
    <div className="more-action-items-container">
      {actionItemsArray.map(({ title, icon }) => (
        <MoreActionItem actionName={title}>{icon}</MoreActionItem>
      ))}
    </div>
  );
};

export default MoreAcitonItems;
