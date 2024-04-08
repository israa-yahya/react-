// components/Navbar.js

import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'; // Import faBars and faCaretDown icons

const Navbar = () => {
  // State variable to track the menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Navbar content */}
      <img className="logo" src="./oxp-logo4.webp" alt="this is logo" />
        <div className={`navbar_content ${isMenuOpen ? 'open' : ''}`} id="navbarContent">
            <div className="menu">
                <a href="#"> CATEGORIES </a>
                <FontAwesomeIcon icon={faCaretDown} className={styles.icon} /> {/* Apply icon class */}
            </div>
            <div className="menu">
                <a href="#"> HOME </a>
                <FontAwesomeIcon icon={faCaretDown} className={styles.icon} /> {/* Apply icon class */}
            </div>
            <div className="menu">
                <a> ABOUT </a>
            </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} /> {/* Apply icon class */}
        </div>
    </nav>
  );
}

export default Navbar;
