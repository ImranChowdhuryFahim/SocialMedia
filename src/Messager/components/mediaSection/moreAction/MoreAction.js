import React, { useState } from "react";
import { CaretLeftOutlined, CaretDownOutlined } from "@ant-design/icons";
import MoreActionItems from "./moreActionItems/MoreActionItems";

import "./style.css";
const MoreAction = () => {
  const [isCaretLeftOutOutlined, setIsCaretLeftlined] = useState(true);
  return (
    <div className="more-action">
      <div
        className="more-action-header"
        aria-label="More Actions"
        aria-expanded="true"
        role="button"
        tabIndex="0"
        onClick={(e) => setIsCaretLeftlined(!isCaretLeftOutOutlined)}
      >
        <span className="more-action-title">More Action</span>
        <div
          aria-label="More Actions"
          aria-expanded="true"
          className="caret"
          role="button"
         tabIndex="0"
          onClick={(e) => setIsCaretLeftlined(!isCaretLeftOutOutlined)}
        >
          {isCaretLeftOutOutlined ? (
            <CaretLeftOutlined
              style={{ fontSize: "25px", color: "rgba(0, 0, 0, 0.34)" }}
            />
          ) : (
            <CaretDownOutlined
              style={{ fontSize: "25px", color: "rgba(0, 0, 0, 0.34)" }}
            />
          )}
        </div>
      </div>
      {isCaretLeftOutOutlined ? null : <MoreActionItems />}
    </div>
  );
};

export default MoreAction;
