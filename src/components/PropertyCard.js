import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({ fields }) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = fields;

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
    </div>
  );
};

PropertyCard.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    city: PropTypes.string,
    type: PropTypes.string,
    bedrooms: PropTypes.string,
    bathrooms: PropTypes.string,
    price: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default PropertyCard;
