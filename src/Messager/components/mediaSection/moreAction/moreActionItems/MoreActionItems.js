import React, { useState, createRef, useEffect } from "react";
import {
  SearchOutlined,
  EditOutlined,
  FormatPainterOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import MoreActionItem from "./MoreActionItem";
import Modal from "../../../../Modal";

import "./style.css";

const MoreAcitonItems = () => {
  const [showModal, setShowModal] = useState(false);
  const elRef = createRef();
  const actionItemsArray = [
    { title: "Search in Conversation", icon: <SearchOutlined /> },
    { title: "Edit Nicknames", icon: <EditOutlined /> },
    { title: "Change App Theme", icon: <FormatPainterOutlined /> },
    {
      title: "Set Message Color",
      icon: <BgColorsOutlined />,
      action: () => {
        setShowModal(!showModal);
      },
    },
  ];
  useEffect(() => {
    if (elRef.current) elRef.current.focus();
  }, [elRef]);
  return (
    <>
      <div className="more-action-items-container">
        {actionItemsArray.map(({ title, action, icon }) => (
          <MoreActionItem actionName={title} action={action}>
            {icon}
          </MoreActionItem>
        ))}
      </div>
      {showModal ? (
        <Modal>
          <div
            className="modal-div"
            tabIndex={1}
            ref={elRef}
            onBlur={() => setShowModal(false)}
          >
            DO something with our color
          </div>
          {/* <input type="text" ref={elRef} onBlur={() => setShowModal(false)} /> */}
        </Modal>
      ) : null}
    </>
  );
};

export default MoreAcitonItems;
