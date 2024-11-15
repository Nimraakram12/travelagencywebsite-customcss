import React from "react";
import Link from "next/link";
import "../style/Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">Travel In</Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#destinations">Destinations</Link>
            </li>
            <li>
              <Link href="#packages">Packages</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="cta">
          <a href="#book-now" className="btn">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
