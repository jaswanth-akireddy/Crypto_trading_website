import React from "react";
import { screen, render } from "@testing-library/react";
import DashBoard from "./index";
import { BrowserRouter } from "react-router-dom";

describe("DashBoard component", () => {
  test("renders without errors", () => {
    render(
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    );
  });

  test("renders all section without errors component", () => {
    render(
      <BrowserRouter>
        <DashBoard />
      </BrowserRouter>
    );
    expect(screen.getByText("DashBoard")).toBeInTheDocument();
    expect(screen.getByText("My portfolio Value")).toBeInTheDocument();
    expect(screen.getByText("Total Balance")).toBeInTheDocument();
  });
});
