import React from "react";
import "./style.css";
const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-info-img">
        <img
          id="user-info-img"
          src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.0-1/p100x100/84330606_1074656449551619_2457815084043337728_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_eui2=AeG73UvbbiFur_LpAIndIk8Xbszh_nZjbYBuzOH-dmNtgD6B3g48AOkKb4Yu-2tVybawxLkNwcnJHBd_5P_uv10Y&_nc_ohc=kqmmgoGs4RQAX87TgZH&_nc_oc=AQm1kmvTbJLx1KGIe9dmYgfq_9nDMIy4VDZWqQDqq0WhR360AIffPx3Jkpp0eAUkiBE&_nc_ht=scontent.fcgp6-1.fna&tp=6&oh=0ff22457d3e6061337f930f8ec415921&oe=5F7E3833"
          alt=""
        />
      </div>
      <div className="user-name">
        <a href="https://www.facebook.com">Imran Chowdhury</a>
      </div>
      <div className="status">
        <span>Active Now</span>
      </div>
    </div>
  );
};

export default UserInfo;
