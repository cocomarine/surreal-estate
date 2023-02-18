import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const validProps = {
    onLogin: jest.fn(),
    userID: "test userID",
    onLogout: jest.fn(),
  };

  const setup = () => {
    render(
      <MemoryRouter>
        <NavBar {...validProps} />
      </MemoryRouter>
    );
  };

  it("renders correctly", () => {
    const rendered = renderer.create(
      <MemoryRouter>
        <NavBar {...validProps} />
      </MemoryRouter>
    );
    expect(rendered).toMatchSnapshot();
  });

  it("renders NavBar links correctly", () => {
    setup();

    expect(screen.getByText("View Properties")).toBeInTheDocument();
    expect(screen.getByText("Saved Properties")).toBeInTheDocument();
    expect(screen.getByText("Add a Property")).toBeInTheDocument();
  });
});
