import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ImagePreview = ({ imageURL, removeImage, setTheme, name }) => {
  return (
    <div className="image-preview">
      <img className="image" src={imageURL} alt="" />
      <button
        className="remove-attachment-btn"
        label="Remove attachement"
        title="Remove attachement"
        onClick={(e) => removeImage(name)}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  );
};

export default ImagePreview;
