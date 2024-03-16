import React, { useState } from "react";
import { Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../../HomePage/Components_Css/HomeHeroSection.css";



const HomeHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getMenuIcon = () => {
    return isMenuOpen ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : (
      <FontAwesomeIcon icon={faBars} />
    );
  };
  return (
    <Fragment>
      <div className="hero-Section-Container">
        <div className="hero-banner-container">
          <img
            src="Images/HomePageImage/HeroBanner.jpg"
            className="hero-banner-image"
            alt="Hero Banner"
          />
          <div className="navbar">
            <div>
              <Dropdown
                data-bs-theme="light"
                show={isMenuOpen}
                onToggle={handleToggle}
              >
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant=""
                  className="custom-dropdown-toggle"
                >
                  {getMenuIcon()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" active>
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Param Stories</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Share your Story
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Ask Param Gurudev
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="whitecoloredlogo">
            <img src="/Images/HomePageImage/logo-768x286 (1).png" alt="" />
          </div>
        </div>
        <div className="changingtext-wrapper">
          <div className="C-toptext">A LIFE IN THE SEARCH OF</div>
          <div className="C-downtext">TRUTH</div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeHeroSection;
