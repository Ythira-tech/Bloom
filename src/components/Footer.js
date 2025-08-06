import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="mindbloom-footer">
      <div className="footer-content">
        <h5 className="footer-logo">🌱 MindBloom</h5>
        <p className="footer-text">Take a deep breath. You’re doing okay.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} MindBloom. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
