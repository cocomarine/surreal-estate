import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="/logo.png"
        alt="purple castle logo with 'surreal estate'"
      />
      <ui className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ui>
    </div>
  );
};

export default NavBar;
