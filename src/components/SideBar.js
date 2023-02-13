import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <div className="city-link-container">
        <b>Filter by city</b>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Manchester" })}
            className="city-link"
          >
            Manchester
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Leeds" })}
            className="city-link"
          >
            Leeds
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Sheffield" })}
            className="city-link"
          >
            Sheffield
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Liverpool" })}
            className="city-link"
          >
            Liverpool
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Birmingham" })}
            className="city-link"
          >
            Birmingham
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "London" })}
            className="city-link"
          >
            London
          </Link>
        </div>
      </div>
      <div className="sort-container">
        <b>Sort by</b>
        <div className="price">
          <Link
            to={buildQueryString("sort", { price: 1 })}
            className="price-link"
          >
            Price Ascending
          </Link>
        </div>
        <div className="price">
          <Link
            to={buildQueryString("sort", { price: -1 })}
            className="price-link"
          >
            Price Descending
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
