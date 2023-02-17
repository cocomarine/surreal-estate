import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import SavedProperties from "../components/SavedProperties";

describe("SavedProperties", () => {
  let testUserID = "test userID";

  it("renders correctly", () => {
    const rendered = renderer.create(<SavedProperties userID={testUserID} />);
    expect(rendered).toMatchSnapshot();
  });

  it("returns login message when userID not truthy", () => {
    testUserID = "";
    render(<SavedProperties userID={testUserID} />);
    const text = screen.getByText("Please login to view saved properties.");

    expect(text).toBeInTheDocument();
  });
});
