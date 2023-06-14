import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../css/style.css";
import ToggleButton from './ToggleButton';

const Header = () => {
  return (
    <>
      <header className="header">

        <div className="header-inner">

          <h1 className="logo"></h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </nav>

          <ToggleButton />

        </div>
      </header>
    </>
  );
}

export default Header