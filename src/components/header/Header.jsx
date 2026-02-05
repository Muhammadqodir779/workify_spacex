import React, { useState } from 'react';
import './Header.css';
import { BiBook } from 'react-icons/bi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">workify</div>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#talents" className="nav-link">
              <RiAccountCircleLine />
              Talents
            </a>
            <a href="#jobs" className="nav-link">
              <BiBook />
              Jobs
            </a>
          </nav>

          <div className="header-actions">
            <Link to="/sign_in" className="btn btn-signin">
              Sign in
            </Link>
            <Link to="/register" className="btn btn-join">
              Join now
            </Link>
            <div className="language">Eng</div>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
