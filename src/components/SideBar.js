import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const SideBar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          className="search-input"
          placeholder="Search by Title"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="magglassIcon" />
        </button>
      </form>
      <div className="city-link-container">
        <b>Filter by city</b>
        <div className="city-name">
          <Link
            to={buildQueryString("query", { city: "Manchester" })}
            className="city-link"
          >
            Manchester
          </Link>
        </div>
        <div className="city-name">
          <Link
            to={buildQueryString("query", { city: "Leeds" })}
            className="city-link"
          >
            Leeds
          </Link>
        </div>
        <div className="city-name">
          <Link
            to={buildQueryString("query", { city: "Sheffield" })}
            className="city-link"
          >
            Sheffield
          </Link>
        </div>
        <div className="city-name">
          <Link
            to={buildQueryString("query", { city: "Liverpool" })}
            className="city-link"
          >
            Liverpool
          </Link>
        </div>
        <div className="city-name">
          <Link
            to={buildQueryString("query", { city: "Birmingham" })}
            className="city-link"
          >
            Birmingham
          </Link>
        </div>
        <div className="city-name">
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
        <div className="price-sort">
          <Link
            to={buildQueryString("sort", { price: 1 })}
            className="price-link"
          >
            Price Ascending
          </Link>
        </div>
        <div className="price-sort">
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
