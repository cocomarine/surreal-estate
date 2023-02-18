import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  xit("renders App correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  // it("renders App correctly", () => {
  //   const rendered = renderer.create(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(rendered).toMatchSnapshot();
  // });
});
