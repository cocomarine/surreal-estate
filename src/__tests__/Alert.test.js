import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<Alert message="" />);
    expect(rendered).toMatchSnapshot();
  });

  it("displays an error message", () => {
    const { asFragment } = render(<Alert message="Error!" />);
    const errorMsg = screen.getByText(/Error/);

    expect(asFragment()).toMatchSnapshot();
    expect(errorMsg).toBeInTheDocument();
  });

  it("displays a success message", () => {
    const { asFragment } = render(<Alert message="Success!!" success />);
    const successMsg = screen.getByText(/Success/);

    expect(asFragment()).toMatchSnapshot();
    expect(successMsg).toBeInTheDocument();
  });
});
