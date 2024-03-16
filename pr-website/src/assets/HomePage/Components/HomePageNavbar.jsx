import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../HomePage/Components_Css/NavbarHomePage.css';

const  HomePageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getMenuIcon = () => {
    return isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />;
  };

  return (
    <div className='navbar'>

      <div>
        <Dropdown data-bs-theme="dark" show={isMenuOpen} onToggle={handleToggle}>
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="custom-dropdown-toggle">
            {getMenuIcon()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>Home</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Param Stories</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Share your Story</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Ask Param Gurudev</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default HomePageNavbar;
