import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import "../Component_Css/AppInfo.css";
const AppInfo = () => {
  return (
    <div className="appinfo-wrapper">
      <div className="Toppart">
        <div className="quickview-wrapper">
          <div className="quick">
            <div className="quicktext">MEET PARAM GURUDEV </div>
          </div>
        </div>
      </div>
      <div className="appinfo">
        <div className="left-textcontent">
          <div className="flex flex-col justify-center">
            <div className="left-top">
              Your opportunity to meet Param Gurudev and seek personal guidance
              and margdashan. Download the Param-G App to schedule a meeting
              with Param Gurudev.
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                gap: "10px",
              }}
            >
              <img
                src="Images/HomePageImage/google-play.png"
                alt="logo-googleplay"
              />
              <img src="Images/HomePageImage/app-store.png" alt="logo-apple" />
            </div>
          </div>
        </div>
        <div className="right-textcontent">
          <img src="Images/HomePageImage/Phone.png" alt="logo-apple" />
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
