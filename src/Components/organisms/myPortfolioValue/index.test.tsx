import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioValueSection from ".";
describe("PortfolioValueSection Component", () => {
  test("Render PortfolioValueSection component with valid props", () => {
    const wrapper = render(<PortfolioValueSection />);
    expect(wrapper).toBeTruthy;
  });
});
