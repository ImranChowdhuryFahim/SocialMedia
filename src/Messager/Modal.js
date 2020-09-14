import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onBlur }) => {
  const elemRef = useRef(null);
  if (!elemRef.current) {
    elemRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.appendChild(elemRef.current);
    console.log(children);
    const clearModal = () => modal.removeChild(elemRef.current);
    return clearModal;
  }, []);
  return createPortal(<div>{children}</div>, elemRef.current);
};

export default Modal;
