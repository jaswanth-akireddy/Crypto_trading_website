import React from "react";
import EmptyRecentTransaction from "./index";
import { render, screen } from "@testing-library/react";

describe("EmptyRecentTransaction component", () => {
  it("renders without errors", () => {
    render(<EmptyRecentTransaction />);
  });

  it("displays the 'Recent transactions' text", () => {
    render(<EmptyRecentTransaction />);
    expect(screen.getByText("Recent transactions")).toBeInTheDocument();
  });

  it("displays the 'View All' text", () => {
    render(<EmptyRecentTransaction />);
    expect(screen.getByText("View All")).toBeInTheDocument();
  });

  it("displays the 'Un Draw Plain Credit card' image", () => {
    render(<EmptyRecentTransaction />);
    expect(
      screen.getByAltText("Un Draw Plain Credit card")
    ).toBeInTheDocument();
  });

  it("displays the 'You don’t own any crypto...' text", () => {
    render(<EmptyRecentTransaction />);
    expect(
      screen.getByText(
        "You don’t own any crypto. Send yourself some crypto to get started."
      )
    ).toBeInTheDocument();
  });
});
