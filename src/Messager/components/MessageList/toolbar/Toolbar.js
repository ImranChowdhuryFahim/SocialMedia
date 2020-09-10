import React from "react";
import "./style.css";
import Imran from "./Imran.jpg";

const Toolbar = () => {
  return (
    <>
      <div className="tool-bar">
        <div className="person-info">
          <img src={Imran} alt="" className="round-img" />
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
                  <svg
                    aria-labelledby="svg-inline--fa-title-iM1yTumX0i0X"
                    data-prefix="far"
                    data-icon="sign-in-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="50 50 512 512"
                    // class="svg-inline--fa fa-sign-in-alt fa-w-16 fa-fw fa-lg"
                  >
                    <title id="svg-inline--fa-title-iM1yTumX0i0X" className="">
                      Flip Left
                    </title>
                    <path
                      fill="#0099ff"
                      d="M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z"
                      className=""
                    ></path>
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
