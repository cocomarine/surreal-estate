import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const validProps = {
    onLogin: jest.fn(),
    userID: "test userID",
    onLogout: jest.fn(),
  };

  xit("renders correctly", () => {
    const { asFragment } = render(<NavBar validProps={validProps} />);
    expect(asFragment()).toMatchSnapshot();
    // const rendered = renderer.create(<NavBar validProps={validProps} />);
    // expect(rendered).toMatchSnapshot();
  });
});
