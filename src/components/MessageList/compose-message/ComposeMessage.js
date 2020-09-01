import React, { useState } from "react";
import "./style.css";
import EmojiPicker from "./EmojiPicker";

const ComposeMessage = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message, "********");
  };

  return (
    <div className="compose-message">
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(message);
          }}
          style={{
            padding: "5px",
            margin: "10px",
            width: "70%",
            height: "45px",
            border: "none",
            borderRadius: "2%",
          }}
          placeholder="Write something"
        />
        {showEmojiPicker ? (
          <EmojiPicker
            setMessage={setMessage}
            message={message}
            setShowEmojiPicker={setShowEmojiPicker}
          />
        ) : null}
        <button
          aria-label="Choose an emoji"
          title="Choose an emoji"
          style={{ border: "none" }}
          onClick={(e) => {
            e.preventDefault();
            setShowEmojiPicker(true);
          }}
        >
          <svg height="24px" width="24px" viewBox="0 0 26 26">
            <g fill="none" fill-rule="evenodd">
              <polygon points="0,26 26,26 26,0 0,0 "></polygon>
              <path
                d="m19.1311,16.73095c-0.4325,-0.3545 -1.0775,-0.302 -1.441,0.122c-1.171,1.3615 -2.883,2.142 -4.697,2.142c-1.8135,0 -3.526,-0.7805 -4.697,-2.142c-0.363,-0.4225 -1.008,-0.4765 -1.441,-0.122c-0.432,0.355 -0.488,0.986 -0.1245,1.408c1.5605,1.8145 3.8435,2.855 6.2625,2.855c2.4195,0 4.702,-1.0405 6.2625,-2.855c0.3635,-0.422 0.3075,-1.053 -0.1245,-1.408m-2.1355,-7.731c-0.9375,0 -1.5,0.75 -1.5,2c0,1.25 0.5625,2 1.5,2c0.9375,0 1.5,-0.75 1.5,-2c0,-1.25 -0.5625,-2 -1.5,-2m-8,0c-0.9375,0 -1.5,0.75 -1.5,2c0,1.25 0.5625,2 1.5,2c0.9375,0 1.5,-0.75 1.5,-2c0,-1.25 -0.5625,-2 -1.5,-2m4.0045,16c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.6275,0 12,5.3725 12,12c0,6.6275 -5.3725,12 -12,12"
                fill="#FF2E19"
              ></path>
            </g>
          </svg>
        </button>
        <svg height="24" width="24" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <polygon points="-6,30 30,30 30,-6 -6,-6 "></polygon>
            <path
              d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"
              style={{ fill: "rgb(255, 46, 25)" }}
            ></path>
          </g>
        </svg>
        <svg height="36px" width="36px" viewBox="0 0 36 36">
          <g fill="none" fill-rule="evenodd">
            <g id="Group">
              <polygon points="0 36 36 36 36 0 0 0"></polygon>
              <path
                d="M13.5,11 C12.1195,11 11,12.119 11,13.5 C11,14.881 12.1195,16 13.5,16 C14.8805,16 16,14.881 16,13.5 C16,12.119 14.8805,11 13.5,11 M26.638,21.467 L21.2375,18.767 C19.199,17.7485 16.801,17.7485 14.7625,18.767 L9.362,21.467 C9.1955,21.55 9,21.429 9,21.243 L9,11 C9,9.8955 9.8955,9 11,9 L25,9 C26.1045,9 27,9.8955 27,11 L27,21.243 C27,21.429 26.8045,21.55 26.638,21.467 M25,7 L11,7 C8.7905,7 7,8.791 7,11 L7,25 C7,27.209 8.7905,29 11,29 L25,29 C27.209,29 29,27.209 29,25 L29,11 C29,8.791 27.209,7 25,7"
                fill="#FF2E19"
              ></path>
            </g>
          </g>
        </svg>
      </form>
    </div>
  );
};

export default ComposeMessage;
