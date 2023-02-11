import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "test title",
    city: "test city",
    type: "test type",
    bedrooms: "2",
    bathrooms: "1",
    price: "1234",
    email: "test@email.com",
  };

  it("renders correctly", () => {
    const rendered = renderer.create(<PropertyCard fields={validProps} />);
    expect(rendered).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    render(<PropertyCard fields={validProps} />);

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
});
