import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Properties from "../components/Properties";

describe("Properties", () => {
  const testUserID = "test userID";

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Properties userID={testUserID} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
