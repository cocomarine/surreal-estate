import React from "react";
import PropTypes from "prop-types";

const SavedPropertiesCard = ({ title, city }) => {
  return (
    <div className="saved-property-card-container">
      <div className="saved-property-card__title">
        {title} in {city}
      </div>
    </div>
  );
};

SavedPropertiesCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default SavedPropertiesCard;
