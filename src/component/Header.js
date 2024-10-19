import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Car Rental Service</h1>
      <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/">Cars</a></li>
          <li><a href="/book">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;