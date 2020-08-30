import React from "react";
import "./style.css";

const ComposeMessage = () => {
  return (
    <div className="compose-message">
      <form
        action=""
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <input
          type="text"
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
        <svg class="_7oal" height="24" width="24" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <polygon points="-6,30 30,30 30,-6 -6,-6 "></polygon>
            <path
              d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"
              style={{ fill: "rgb(255, 46, 25)" }}
            ></path>
          </g>
        </svg>
        <svg class="_7oal" height="36px" width="36px" viewBox="0 0 36 36">
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