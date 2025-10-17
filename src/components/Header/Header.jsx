import { useState } from 'react';
import './Header.css';

/**
 * Header Component
 *
 * Sticky navigation header with Vox-inspired branding.
 * Features a clickable logo linking to Vox.com, responsive navigation,
 * and a mobile hamburger menu with smooth transitions.
 *
 * @component
 */
const Header = () => {
  // State management for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo with external link to Vox.com */}
        <a href="https://www.vox.com/" className="logo-link" target="_blank" rel="noopener noreferrer">
          <div className="logo">
            {/* Custom SVG megaphone icon */}
            <svg className="logo-circle" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#1a1a1a"/>
              <path d="M26 14L18 18V22L26 26V14Z" fill="#ffeb00"/>
              <path d="M16 18H14C13.4477 18 13 18.4477 13 19V21C13 21.5523 13.4477 22 14 22H16V18Z" fill="#ffeb00"/>
              <path d="M26 14C26.5 14 27 14.5 27 15V25C27 25.5 26.5 26 26 26" stroke="#ffeb00" strokeWidth="1" fill="none"/>
            </svg>
            <span className="logo-text">
              <span className="logo-text-large">M</span>anz
            </span>
          </div>
        </a>

        {/* Hamburger menu button - visible only on mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Main navigation - transforms to dropdown on mobile */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="https://www.color-hex.com/color-palette/7200" target="_blank" rel="noopener noreferrer">News</a></li>
            <li><a href="https://graphicdesign.stackexchange.com/questions/113544/what-category-of-font-is-the-vox-logo" target="_blank" rel="noopener noreferrer">Listen</a></li>
            <li><a href="https://www.youtube.com/shorts/ccZBTv27yQI" target="_blank" rel="noopener noreferrer">Watch</a></li>
            <li><a href="#login" className="login-btn">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
