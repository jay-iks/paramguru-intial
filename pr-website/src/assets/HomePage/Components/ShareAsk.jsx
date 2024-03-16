import React from "react";
import "../../HomePage/Components_Css/ShareAsk.css";

import { NavLink } from "react-router-dom";
//
const ShareAsk = () => {
  return (
    <div className="shareAskwrapper">
      <div className="shareAskContainer">
        <div className="Shareimage">
          <NavLink to="/shareyourstories">
            <img src="Images/HomePageImage/Share.JPG" alt="Share" />
          </NavLink>
        </div>
        <div className="Askimage">
          <NavLink to="/askparamdev">
            <img src="Images/HomePageImage/Ask.JPG" alt="Share" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShareAsk;
