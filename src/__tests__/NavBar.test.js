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

  it("renders logout button correctely when logged in", () => {
    setup();

    expect(screen.getByText("SIGN OUT")).toBeInTheDocument();
  });

  it("clicking logout button calls correct function", () => {
    setup();

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onLogout).toHaveBeenCalled();
    expect(validProps.onLogout).toHaveBeenCalledTimes(1);
  });

  xit("clicking login button calls correct function", () => {
    validProps.userID = "";
    setup();

    fireEvent.click(screen.getByRole("button"));
    expect(validProps.onLogin).toHaveBeenCalled();
    expect(validProps.onLogin).toHaveBeenCalledTimes(1);
  });

  xit("renders NavBar links correctly when logged out", () => {
    validProps.userID = "";
    setup();

    expect(screen.getByText("View Properties")).toBeInTheDocument();
    expect(screen.getByText("Saved Properties")).toBeInTheDocument();
    expect(screen.getByText("Add a Property")).toBeInTheDocument();
  });

  xit("renders Facebook login button correctely when logged out", () => {
    validProps.userID = "";
    setup();

    expect(screen.getByText("LOGIN WITH FACEBOOK")).toBeInTheDocument();
  });
});
