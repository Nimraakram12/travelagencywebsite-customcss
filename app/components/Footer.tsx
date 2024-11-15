import React from 'react';
import "../style/Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TRAVEL IN. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
