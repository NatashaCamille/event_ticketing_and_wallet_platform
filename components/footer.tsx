import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src="/logo.png" alt="Event Ticketing Platform Logo" />
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer__social">
          <ul>
            <li><a href="https://www.facebook.com/yourpagename"><FaFacebook /></a></li>
            <li><a href="https://twitter.com/yourtwitterhandle"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com/yourinstagramhandle"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} VACAD Event Ticketing Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
