import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../css/style.css";

const Navigation = () => {

   const [navIsOpen, setNavIsOpen] = useState(false);

   const toggleNav = () => {
     setNavIsOpen((prev) => !prev);
   };
  
  return (
    <>
      <nav className={navIsOpen ? "nav-open" : ""}>
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
    
          <div
            className={` toggle-btn ${navIsOpen ? "open" : "close"} `}
            onClick={toggleNav}
          >
            <span className={navIsOpen ? "toggle-first" : ""}></span>
            <span className={navIsOpen ? "toggle-second" : ""}></span>
            <span className={navIsOpen ? "toggle-third" : ""}></span>
      </div>
      
    </>

    
  )
}

export default Navigation