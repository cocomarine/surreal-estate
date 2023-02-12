import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="city-link-container">
        <b>Filter by city</b>
        <div className="city">
          <Link to={`/?query={"city": "Manchester"}`} className="city-link">
            Manchester
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Leeds"}`} className="city-link">
            Leeds
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Sheffield"}`} className="city-link">
            Sheffield
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Liverpool"}`} className="city-link">
            Liverpool
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Birmingham"}`} className="city-link">
            Birmingham
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "London"}`} className="city-link">
            London
          </Link>
        </div>
      </div>
      <div className="sort-container">
        <b>Sort by</b>
        <div className="price">
          <Link to="/" className="price-link">
            Price Ascending
          </Link>
        </div>
        <div className="price">
          <Link to="/" className="price-link">
            Price Descending
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
