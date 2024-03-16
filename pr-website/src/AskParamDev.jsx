import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faBookmark,
  faChevronDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import Navbar from "./assets/Components/Navbar";
import ContactUs from "./assets/AskParamGuru/Components/ContactUs";
import HomepageFooter from "./assets/HomePage/Components/HomepageFooter";
const AskParamDev = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div>
          <div className="Toppart">
            <div className="quickview-wrapper">
              <div className="quick">
                <div className="quicktext">ASK PARAM</div>
              </div>
              <div className="views-wrapper">
                <div className="views"> GURUDEV</div>
              </div>
            </div>
          </div>
          <div className="quickview-viweall-text-logo">
           
              <div className="quickview-viweall-text">
                <NavLink to="/">
                BACK
                </NavLink>
              </div>
              <div className="quickview-viweall-logo">
                <NavLink to="/">
                <FontAwesomeIcon icon={faGreaterThan} />
                </NavLink>
              </div>
            
          </div>
        </div>

        <ContactUs />
        <div className="text-[20px] text-[#aa7b2c]">
          May write us:{" "}
          <a style={{ textDecoration: " 2px underline soild" }} href="#">
            connect@parasdham.org{" "}
          </a>
        </div>
      </div>

      <HomepageFooter />
    </div>
  );
};

export default AskParamDev;
