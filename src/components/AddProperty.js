import React, { useState } from "react";
import postProperty from "../requests/postProperty";
import Alert from "./Alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "0",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    postProperty(fields, setAlert);
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <div className="add-property-container">
        <Alert message={alert.message} success={alert.isSuccess} />
        <form onSubmit={handleAddProperty}>
          <div className="form-field">
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="city">
              City
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester" selected>
                  Manchester
                </option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="type">
              Property Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="bedrooms">
              Bedrooms
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                placeholder="Bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="bathrooms">
              Bathrooms
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                placeholder="Bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="price">
              Asking Price
              <input
                type="number"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="email">
              email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@email.co.uk"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
