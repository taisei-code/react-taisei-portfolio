import React, { useState } from "react";
import "../css/style.css";

const ToggleButton = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <div
      className={` toggle-btn ${navIsOpen ? "open" : "close"} `}
      onClick={toggleNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ToggleButton;
