import React, { useState } from 'react';
import './Mashhura.css';
import img from "../../assets/image.png"
import { BiBook } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { ImUserPlus } from "react-icons/im";
import { TbShoppingBagEdit } from "react-icons/tb";
import { FaHandshake, FaSearch } from 'react-icons/fa';
import { FaInstagram,FaYoutube,FaFacebook,FaTelegram } from "react-icons/fa";
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
             
              <a href="#talents" className="nav-link"><RiAccountCircleLine />Talents</a>
              <a href="#jobs" className="nav-link"><BiBook />Jobs</a>
            </nav>

            <div className="header-actions">
              <button className="btn btn-signin">Sign in</button>
              <button className="btn btn-join">Join Now</button>
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
                Find aspiring talents<br />
                and great employers
              </h1>
              <p className="hero-description">
                Thousands of people in search of dream job and<br />
                you are looking for and choose one from among the best.
              </p>

              <div className="search-section">
                <div className="search-inputs">
                  <div className="input-group">
                    <label>Are a talent</label>
                    <input type="text" placeholder="Job title or keyword" className="search-input" />
                  </div>
                  <div className="input-group">
                    <label>Find a job</label>
                    <input type="text" placeholder="Location" className="search-input" />
                  </div>
                </div>
                <button className="btn btn-search">Search</button>
              </div>
            </div>

            <div className="hero-illustration">
              <div className="illustration-circle">
                <div className="person-working">
                  
                 <img className='images' src={img} alt="" />
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
                <div className="icon-recruiter"><ImUserPlus /></div>
              </div>
              <h3 className="feature-title">Outstanding recruiter</h3>
              <p className="feature-text">
                Search among the best<br />
                in their's fields
              </p>
            </div>

            <div className="feature-card feature-card-primary">
              <div className="feature-icon">
                <div className="icon-job"><TbShoppingBagEdit /></div>
              </div>
              <h3 className="feature-title">Find the right<br />job you want fast</h3>
              <p className="feature-text">
                Search any career<br />
                opportunity from around<br />
                the world
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-collaborate"><FaHandshake /></div>
              </div>
              <h3 className="feature-title">All collaborate<br />need some help</h3>
              <p className="feature-text">
                Connect with a other<br />
                professionals
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-search"><FaSearch />  </div>
              </div>
              <h3 className="feature-title">Searching is not may<br />be long And boring</h3>
              <p className="feature-text">
                Quick search with a<br />
                pleasant interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="jobs" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">workify</div>
              <p className="footer-tagline">Job posting platform</p>
              <button className="btn btn-contact">Contact</button>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">General</h4>
              <ul className="footer-links">
                <li><a href="#signup">Sign up</a></li>
                <li><a href="#portal">Portals</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#partners">Partners</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#post-job">Post a job</a></li>
                <li><a href="#search-talents">Search talents</a></li>
                <li><a href="#company-login">Company login</a></li>
                <li><a href="#company-values">Company values</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Talents</h4>
              <ul className="footer-links">
                <li><a href="#search-jobs">Search jobs</a></li>
                <li><a href="#talent-login">Talent login</a></li>
                <li><a href="#talent-advise">Talent advise</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">All right reserved. 2021</p>
            <div className="social-links">
              <a href="#instagram" className="social-icon"><FaInstagram /></a>
              <a href="#facebook" className="social-icon"><FaFacebook /></a>
              <a href="#youtube" className="social-icon"><FaYoutube />
</a>
              <a href="#telegram" className="social-icon"><FaTelegram /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mashhura;