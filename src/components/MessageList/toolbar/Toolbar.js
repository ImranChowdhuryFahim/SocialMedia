import React from "react";
import "./style.css";
import Imran from './Imran.jpg'

const Toolbar = () => {
  return (
    <>
      <div className="tool-bar">
        <div className="person-info">
          <img
            src={Imran}
            alt=""
            className="round-img"
          />
          <div className="text-info">
            <div>
              <h3>Imran Chowdhury</h3>
            </div>
            <div className="status">Active Now</div>
          </div>
        </div>
        <div className="icons-message">
          <ul id="horizontal-list">
            <li>
              <a className="_30yy" role="button" href="#">
                <div
                  aria-label="Start a voice call"
                  title="Start a voice call"
                  data-testid="startVoiceCall"
                  style={{ height: "32px", width: "32px" }}
                >
                  <svg height="32px" width="32px" viewBox="0 0 36 36">
                    <g
                      id="phone"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <polygon
                        id="Fill-8"
                        points="0 36 36 36 36 0 0 0"
                      ></polygon>
                      <path
                        id="Fill-11"
                        d="M12.8546683,23.0915802 C10.2003459,20.4371382 8.18827548,17.4933995 7.18895039,14.801598 C6.11677282,11.9134196 6.30082118,9.54827444 7.70754499,8.14106577 C8.38574404,7.46332572 9.22115105,6.9556194 9.80301228,6.64860076 C10.1768605,6.45174482 10.6202062,6.44887101 10.9902201,6.6495587 C12.2608248,7.33735708 14.2542027,9.8624776 14.6055242,11.228016 C14.6980277,11.5867632 14.6266131,11.9694589 14.4094936,12.2774354 L12.8029047,14.5630718 C12.7056083,14.7019726 12.682123,14.8820647 12.7415553,15.0406032 C13.4096892,16.8233229 14.2192144,18.3129141 15.9254961,20.01852 C17.6303399,21.7246049 19.1209399,22.5340612 20.904867,23.2027008 C21.0635129,23.2625718 21.2432476,23.2391024 21.3822424,23.1413929 L23.6205389,21.5679822 C23.9339963,21.3476569 24.313596,21.2868279 24.6572488,21.3696894 C26.1948195,21.7356211 28.7992956,23.6898115 29.3811568,24.9135753 C29.5474713,25.2637011 29.5388441,25.6674713 29.3576715,26.0209499 C29.0993327,26.5267404 28.5534185,27.4875506 27.8018877,28.2395308 C24.2474537,31.7915592 16.8807262,27.1187451 12.8546683,23.0915802"
                        fill="#0099ff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a role="button" href="#">
                <div
                  aria-label="Start a video chat"
                  title="Start a video chat"
                  data-testid="startVideoCall"
                  style={{ height: "32px", width: "32px" }}
                >
                  <svg height="32px" width="32px" viewBox="0 0 36 36">
                    <g
                      id="camcorder"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <polygon
                        id="Fill-8"
                        points="0 36 36 36 36 0 0 0"
                      ></polygon>
                      <path
                        id="original"
                        d="M20,27 L9,27 C6.791,27 5,25.209 5,23 L5,13 C5,10.791 6.791,9 9,9 L20,9 C22.209,9 24,10.791 24,13 L24,23 C24,25.209 22.209,27 20,27 M30.5525,23.3995 L26.829,21.536 C26.321,21.282 26,20.762 26,20.193 L26,15.808 C26,15.2395 26.321,14.719 26.829,14.465 L30.5525,12.6015 C31.218,12.269 32,12.753 32,13.497 L32,22.504 C32,23.2485 31.218,23.732 30.5525,23.3995"
                        fill="#0099ff"
                      ></path>
                    </g>
                  </svg>
                </div>
              </a>
              <div className="_3qfl"></div>
            </li>
            <li>
              <a
                aria-expanded="true"
                aria-label="Conversation Information"
                className="_30yy"
                role="button"
                title="Conversation Information"
                data-testid="info_panel_button"
                href="#"
              >
                <div className="_6yms">
                  <div
                    className="_6y4z"
                    style={{ height: "32px", width: "32px" }}
                  ></div>
                  <svg height="32px" width="32px" viewBox="0 0 36 36">
                    <g
                      id="info-circle"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g id="Group">
                        <polygon
                          id="Fill-8"
                          points="0 36 36 36 36 0 0 0"
                        ></polygon>
                        <path
                          id="Fill-17"
                          d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"
                          fill="#0099ff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
              <div aria-owns="js_4"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
