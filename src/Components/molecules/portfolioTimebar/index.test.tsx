import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioTimeBar, { PortfolioTimeBarProps } from ".";
describe("PortfolioTimeBar Component", () => {
  test("Render PortfolioTimeBar component with valid props", () => {
    const props: PortfolioTimeBarProps = {
      options: ["1D", "1W", "1M", "3M", "1Y", "ALL"],
    };
    render(<PortfolioTimeBar {...props} />);
    expect(screen.getByText("1D")).toBeInTheDocument();
    expect(screen.getByText("1W")).toBeInTheDocument();
    expect(screen.getByText("1M")).toBeInTheDocument();
    expect(screen.getByText("3M")).toBeInTheDocument();
    expect(screen.getByText("1Y")).toBeInTheDocument();
    expect(screen.getByText("ALL")).toBeInTheDocument();
  });
  it("clicking on 1D should call the onClick function", () => {
    const props: PortfolioTimeBarProps = {
      options: ["1D", "1W", "1M", "3M", "1Y", "ALL"],
    };
    render(<PortfolioTimeBar {...props} />);
    const btn = screen.getByText("1D");
    fireEvent.click(btn);
    fireEvent.click(btn);
  });
});