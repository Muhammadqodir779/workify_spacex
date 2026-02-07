import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
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
                <li>
                  <a href="/registerStep1">Sign upp</a>
                </li>
                <li>
                  <a href="#portal">Portals</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#partners">Partners</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#post-job">Post a job</a>
                </li>
                <li>
                  <a href="#search-talents">Search talents</a>
                </li>
                <li>
                  <a href="#company-login">Company login</a>
                </li>
                <li>
                  <a href="#company-values">Company values</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Talents</h4>
              <ul className="footer-links">
                <li>
                  <a href="#search-jobs">Search jobs</a>
                </li>
                <li>
                  <Link to="/sign_in">Talent login</Link>
                </li>
                <li>
                  <a href="#talent-advise">Talent advise</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">All right reserved. 2021</p>
            <div className="social-links">
              <a href="#instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#facebook" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#youtube" className="social-icon">
                <FaYoutube />
              </a>
              <a href="#telegram" className="social-icon">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
