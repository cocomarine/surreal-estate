import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import "../styles/navbar.css";

const NavBar = ({ onLogin, userID, onLogout }) => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="/logo.png"
        alt="purple castle logo with 'surreal estate'"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
      <div className="login-button">
        {userID ? (
          <button className="logout-button" type="submit" onClick={onLogout}>
            SIGN OUT
          </button>
        ) : (
          <FacebookLogin appId="506761728339732" callback={onLogin} />
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
