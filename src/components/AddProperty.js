/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <h2 className="add-property__heading">Add Property</h2>
      {/* <div className="add-property-container"> */}
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty} className="add-property-container">
        <div className="form__field title">
          <div className="form__field__label">
            <label htmlFor="title">Title</label>
          </div>
          <div className="form__input__select">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="form__field city">
          <div className="form__field__label">
            <label htmlFor="city">City</label>
          </div>
          <div className="form__input__select">
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
              <option value="Birmingham">Birmingham</option>
              <option value="London">London</option>
            </select>
          </div>
        </div>
        <div className="form__field type">
          <div className="form__field__label">
            <label htmlFor="property-type">Property Type</label>
          </div>
          <div className="form__input__select">
            <select
              id="property-type"
              name="property-type"
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
          </div>
        </div>
        <div className="form__field beds">
          <div className="form__field__label">
            <label htmlFor="bedrooms">Bedrooms</label>
          </div>
          <div className="form__input__select">
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              placeholder="Bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="form__field baths">
          <div className="form__field__label">
            <label htmlFor="bathrooms">Bathrooms</label>
          </div>
          <div className="form__input__select">
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              placeholder="Bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="form__field price">
          <div className="form__field__label">
            <label htmlFor="price">Asking Price</label>
          </div>
          <div className="form__input__select">
            <input
              type="number"
              id="price"
              name="price"
              inputMode="numeric"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="form__field email">
          <div className="form__field__label">
            <label htmlFor="email">email</label>
          </div>
          <div className="form__input__select">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@email.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="form__field button">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
