import React, { useState } from 'react';
import './Mashhura.css';
import img from '../../assets/image.png';
import { BiBook } from 'react-icons/bi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { ImUserPlus } from 'react-icons/im';
import { TbShoppingBagEdit } from 'react-icons/tb';
import { FaHandshake, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const Mashhura = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="workify-page">
      {/* Header */}
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
              <Link to={'/sign_in'} className="btn btn-signin">
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Find aspiring talents
                <br />
                and great employers
              </h1>
              <p className="hero-description">
                Thousands of people in search of dream job and
                <br />
                you are looking for and choose one from among the best.
              </p>

              <div className="search-section">
                <div className="search-inputs">
                  <div className="input-group">
                    <label>Are a talent</label>
                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      className="search-input"
                    />
                  </div>
                  <div className="input-group">
                    <label>Find a job</label>
                    <input
                      type="text"
                      placeholder="Location"
                      className="search-input"
                    />
                  </div>
                </div>
                <button className="btn btn-search">Search</button>
              </div>
            </div>

            <div className="hero-illustration">
              <div className="illustration-circle">
                <div className="person-working">
                  <img className="images" src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="talents" className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-recruiter">
                  <ImUserPlus />
                </div>
              </div>
              <h3 className="feature-title">Outstanding recruiter</h3>
              <p className="feature-text">
                Search among the best
                <br />
                in their's fields
              </p>
            </div>

            <div className="feature-card feature-card-primary">
              <div className="feature-icon">
                <div className="icon-job">
                  <TbShoppingBagEdit />
                </div>
              </div>
              <h3 className="feature-title">
                Find the right
                <br />
                job you want fast
              </h3>
              <p className="feature-text">
                Search any career
                <br />
                opportunity from around
                <br />
                the world
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-collaborate">
                  <FaHandshake />
                </div>
              </div>
              <h3 className="feature-title">
                All collaborate
                <br />
                need some help
              </h3>
              <p className="feature-text">
                Connect with a other
                <br />
                professionals
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-search">
                  <FaSearch />{' '}
                </div>
              </div>
              <h3 className="feature-title">
                Searching is not may
                <br />
                be long And boring
              </h3>
              <p className="feature-text">
                Quick search with a<br />
                pleasant interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mashhura;
