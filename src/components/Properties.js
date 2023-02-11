import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const fields = {
    title: "test title",
    city: "test city",
    type: "test type",
    bedrooms: "1",
    bathrooms: "1",
    price: "1234",
    email: "test@email.com",
  };

  return (
    <div className="properties">
      <PropertyCard fields={fields} />
    </div>
  );
};

export default Properties;
