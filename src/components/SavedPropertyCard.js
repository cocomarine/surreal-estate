import React from "react";
import PropTypes from "prop-types";
import "../styles/saved-property-card.css";

const SavedPropertyCard = ({ propertyId, title, city, onUnsaveProperty }) => {
  return (
    <div className="saved-property-card-container">
      <div className="saved-property-card">
        {title} in {city}
        <button
          className="remove-button"
          type="submit"
          onClick={() => {
            onUnsaveProperty(propertyId);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

SavedPropertyCard.propTypes = {
  propertyId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onUnsaveProperty: PropTypes.func.isRequired,
};

export default SavedPropertyCard;
