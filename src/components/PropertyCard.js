import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
  faHeart as filledHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  _id: propertyId,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSaveProperty,
}) => {
  const [savedState, setSavedState] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/Favourite/`).then((res) => {
      const favs = res.data;
      const matchingFav = favs.filter(
        (fav) => fav.propertyListing === propertyId
      );
      setSavedState(matchingFav.length);
    });
  }, [savedState]);

  return (
    <div className="property-card-container">
      <FontAwesomeIcon icon={faFortAwesome} size="2x" className="castle-icon" />
      <div className="property-card__title">{title}</div>
      <div className="property-card__type__city">
        {type} - {city}
      </div>
      <div className="property-card__bathrooms">
        <FontAwesomeIcon
          icon={faBed}
          className="bedIcon"
          data-testid="bed-icon"
        />
        {bathrooms}
      </div>
      <div className="property-card__bedrooms">
        <FontAwesomeIcon
          icon={faBath}
          className="bathIcon"
          data-testid="bath-icon"
        />
        {bedrooms}
      </div>
      <div className="property-card__price">
        <FontAwesomeIcon
          icon={faSterlingSign}
          className="sterlingIcon"
          data-testid="sterling-icon"
        />
        {price}
      </div>
      <a href={`mailto:${email}`} className="property-card__email">
        <button type="submit" className="email-button">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="emailIcon"
            data-testid="email-icon"
          />
          Email
        </button>
      </a>
      {userID && (
        <button
          disabled={savedState}
          type="submit"
          className="save-button"
          data-testid="save-button"
          onClick={() => {
            onSaveProperty(propertyId);
          }}
        >
          <FontAwesomeIcon
            icon={savedState ? filledHeart : faHeart}
            className="saveIcon"
            data-testid="save-icon"
          />
          {savedState ? <>Saved</> : <>Save</>}
        </button>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
