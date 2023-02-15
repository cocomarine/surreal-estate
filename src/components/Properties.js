import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        setAlert({
          message: "",
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.get("http://localhost:4000/api/v1/Favourite/").then((res) => {
      const existingFavs = res.data;
      const matchingEntry = existingFavs.filter(
        (existingFav) => existingFav.propertyListing === propertyId
      );

      if (!matchingEntry.length) {
        axios.post("http://localhost:4000/api/v1/Favourite/", {
          propertyListing: propertyId,
          fbUserId: userID,
        });
      }
    });
  };

  return (
    <div className="properties-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="properties-cards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <div className="item" key={property._id}>
            <PropertyCard
              userID={userID}
              {...property}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
