import React, { useState } from 'react'
import Navigation from './Navigation';
import "../css/style.css";


const Header = () => {
  
  return (
    <>
      <header className="header">
        <div className="header-inner">

          <h1 className="logo"></h1>

          <Navigation />

        </div>
      </header>
    </>
  );
}

export default Header