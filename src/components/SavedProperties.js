import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SavedPropertiesCard from "./SavedPropertiesCard";
import Alert from "./Alert";

const SavedProperties = ({ userID }) => {
  if (!userID)
    return <div className="login-first-msg">Please login first.</div>;

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
        console.log(res.data);
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

  return (
    <div className="saved-properties-container">
      <div className="saved-properties-cards">
        <Alert message={alert.message} success={alert.isSuccess} />
        {savedProperties.map((savedProperty) => (
          <div className="item" key={savedProperty._id}>
            <SavedPropertiesCard
              userID={savedProperties.userId}
              title={savedProperty.propertyListing.title}
              city={savedProperty.propertyListing.city}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SavedProperties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default SavedProperties;
