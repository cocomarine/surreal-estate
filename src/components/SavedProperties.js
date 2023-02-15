import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SavedPropertiesCard from "./SavedPropertyCard";
import Alert from "./Alert";
import "../styles/saved-properties.css";

const SavedProperties = ({ userID }) => {
  if (!userID)
    return (
      <div className="login-msg">Please login to view saved properties.</div>
    );

  const initialState = {
    savedProperties: [],
  };

  const [savedProperties, setSavedProperties] = useState(
    initialState.savedProperties
  );
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
      .then((res) => {
        setSavedProperties(res.data);
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

  const handleUnsaveProperty = (propertyId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${propertyId}`)
      .then(() => {
        axios
          .get(
            "http://localhost:4000/api/v1/Favourite?populate=propertyListing"
          )
          .then((res) => {
            setSavedProperties(res.data);
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="saved-properties-container">
      <Alert message={alert.message} success={alert.isSuccess} />
      {savedProperties.map((savedProperty) => (
        <div className="item" key={savedProperty._id}>
          <SavedPropertiesCard
            userID={savedProperties.userId}
            propertyId={savedProperty._id}
            title={savedProperty.propertyListing.title}
            city={savedProperty.propertyListing.city}
            onUnsaveProperty={handleUnsaveProperty}
          />
        </div>
      ))}
    </div>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
