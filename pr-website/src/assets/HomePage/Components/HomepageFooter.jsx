import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import '../../HomePage/Components_Css/HomepageFooter.css';

const HomepageFooter = () => {
  return (
    <>
      <footer className="footer">
        {/* <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="contact-info">
              To know more, visit:{" "}
              <a
                href="http://www.parasdham.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.parasdham.org
              </a>
              <br />
              <span className="contact-info-">connect@parasdham.org</span>
              <br />
              <div className='wrap-icon'>
                <span clssname="iconshomepage"><FontAwesomeIcon  icon={faFacebook} /></span>
                <span clssname="iconshomepage"><FontAwesomeIcon  icon={faYoutube} /></span>
                <span clssname="iconshomepage"><FontAwesomeIcon  icon={faInstagram} /></span>
                <span clssname="iconshomepage"><FontAwesomeIcon  icon={faSoundcloud} /></span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="copyright1">
          &copy; 2024 Copyright by All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default HomepageFooter;
