import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Properties from "../components/Properties";

describe("Properties", () => {
  const testUserID = "test userID";

  it("renders correctly", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <Properties userID={testUserID} />
      </MemoryRouter>
    );
    expect(rendered).toMatchSnapshot();
  });
});
