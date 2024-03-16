import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faBookmark,
  faChevronDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

import "/src/assets/VedioPage/Component_Css/VedioMainSection.css";

// import CopyrightFooter from "./assets/Components/CopyrightFooter";

const VedioMainSection = () => {
  return (
    <div>
      <div className="headingt">Home &gt; Quick Views &gt; A Gentle Heart</div>
      <div className="MainVedioSection">
        {/* Vertical Slider */}
        <div className="VerticalSlider123">
          <img
            src="/Images/SliderImages/1.jpg"
            alt=""
            className="verticalVedio"
          />
        </div>
        <div className="NormalSlider">
          <div className="title12"> A Gentle Heart</div>
          <div className="View-people">110 Views</div>
          <div className="bookmark-share">
            <div className="vedio-bookmark">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className="vedio-share">
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
          <div className="nexttext">Next Vedio</div>
          <img
            src="/Images/SliderImages/1.jpg"
            alt=""
            className="verticalVedio"
          />
        </div>
      </div>
    </div>
  );
};

export default VedioMainSection;
