import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faBookmark,
  faChevronDown,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

import DetailMainSlider from "./DetailMainSlider";

import "../../Detailpage/Component_css/DetailsMainSection.css";

const DetailsMainSection = () => {
  return (
    <Fragment>
      <div className="detailsMs">
        <div className="Toppart">
          <div className="quickview-wrapper">
            <div className="quick">
              <div className="quicktext">INSPIRING</div>
              <div className="greaterthan-symbol">
                <FontAwesomeIcon icon={faGreaterThan} />
              </div>
            </div>
            <div className="views-wrapper">
              <div className="views">MOMENTS</div>
            </div>
          </div>
          <div className="quickview-viweall-text-logo">
            <div className="quickview-viweall-text">VIEW ALL</div>
            <div className="quickview-viweall-logo">
              <FontAwesomeIcon icon={faGreaterThan} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 detailsmainwrapper">
          <div className="vedio-section">
            <div className="vedio-section-wrapper">
              <video width="100%" controls>
                <source
                  src="Images/DetailPage/gurudevjpg.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="flex title-comment">
              <h5>Gurudev… This is Unfair!</h5>
              <div className="text-A32">
                {" "}
                <FontAwesomeIcon
                  className="vedio-comment"
                  icon={faChevronDown}
                />
              </div>
            </div>
            <p className="content-A32">
              For a shishya, Guru’s lotus feet are his home. And his home
              becomes a temple when it is graced by Guru’s blessed charan! So, a
              shishya always yearns for that one moment when his Guru will grace
              his home and heart, and sanctify it with his pious presence.
            </p>
            <p className="vedio-section-response">
              98 views• July 5, 2023, 6:16 am
            </p>
            <div className="flex gap-3 vedio-share-comment">
              <div className="vedio-bookmark">
                {" "}
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className="vedio-share">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
            <div className="vedio-section-comment">
              <p>Comment</p>
              <div className="text-A32">
                {" "}
                <FontAwesomeIcon
                  className="vedio-comment"
                  icon={faChevronDown}
                />
              </div>
            </div>
          </div>
          <div className="slider-section">
            <div className="nextdm">Next</div>
            <hr />
            <DetailMainSlider />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsMainSection;
