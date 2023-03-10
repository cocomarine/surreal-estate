import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import SavedPropertyCard from "../components/SavedPropertyCard";

describe("SavedPropertyCard", () => {
  const validProps = {
    propertyId: "test propertyId",
    title: "test title",
    city: "test city",
    onUnsaveProperty: jest.fn(),
  };

  const setup = () => {
    render(<SavedPropertyCard {...validProps} />);
  };

  it("renders correctly", () => {
    const rendered = renderer.create(<SavedPropertyCard {...validProps} />);
    expect(rendered).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    setup();

    expect(screen.getByText("test title in test city")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("remove-button");
  });

  it("clicking button calls correct function", () => {
    setup();

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onUnsaveProperty).toHaveBeenCalled();
    expect(validProps.onUnsaveProperty).toHaveBeenCalledTimes(1);
    expect(validProps.onUnsaveProperty).toHaveBeenCalledWith(
      validProps.propertyId
    );
  });
});
