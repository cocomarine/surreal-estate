import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    _id: "test id",
    title: "test title",
    city: "test city",
    type: "test type",
    bedrooms: "2",
    bathrooms: "1",
    price: "1234",
    email: "test@email.com",
    userID: "test userID",
  };

  it("renders correctly", () => {
    const rendered = renderer.create(<PropertyCard {...validProps} />);
    expect(rendered).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    render(<PropertyCard {...validProps} />);

    expect(screen.getByText("test title")).toHaveClass("property-card__title");
    expect(screen.getByText("test type - test city")).toHaveClass(
      "property-card__type__city"
    );
    expect(screen.getByText("2")).toHaveClass("property-card__bedrooms");
    expect(screen.getByText("1")).toHaveClass("property-card__bathrooms");
    expect(screen.getByText("1234")).toHaveClass("property-card__price");
    expect(screen.getByText("Email")).toHaveClass("email-button");

    expect(screen.getByTestId("bed-icon")).toHaveClass("bedIcon");
    expect(screen.getByTestId("bath-icon")).toHaveClass("bathIcon");
    expect(screen.getByTestId("email-icon")).toHaveClass("emailIcon");
  });

  it("renders no Save button when userID is not truthy", () => {
    validProps.userID = "";
    render(<PropertyCard {...validProps} />);
    const saveButton = screen.queryByTestId("save-button");

    expect(saveButton).not.toBeInTheDocument();
  });

  it("renders Save button when userID is truthy", () => {
    validProps.userID = "test userID";
    render(<PropertyCard {...validProps} />);
    const saveButton = screen.queryByTestId("save-button");

    expect(saveButton).toBeInTheDocument();
  });
});
