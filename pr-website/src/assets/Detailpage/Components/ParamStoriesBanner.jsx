import React from "react";
import "../../Detailpage/Component_css/ParamStoriesBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const ParamStoriesBanner = () => {
  return (
    <div className="Param-Stories-banner">
      <img src="Images/DetailPage/line-.png" alt="line" />
      PARAM STORIES
      <FontAwesomeIcon className="greater-than" icon={faGreaterThan} />
    </div>
  );
};

export default ParamStoriesBanner;
