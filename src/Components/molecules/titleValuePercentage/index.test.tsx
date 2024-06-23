import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TitleValuePercentage, { TitleValuePercentageProps } from ".";
describe("TitleValuePercentage Component", () => {
  test("Render TitleValuePercentage component with valid props", () => {
    const props: TitleValuePercentageProps = {
      title: "Total Investment",
      value: "1,000,000",
      changePercentage: "+10%",
    };
    render(<TitleValuePercentage {...props} />);
    expect(screen.getByText("Total Investment")).toBeInTheDocument();
    expect(screen.getByText("1,000,000")).toBeInTheDocument();
    expect(screen.getByText("+10%")).toBeInTheDocument();
  });
  test("Render TitleValuePercentage component with negative percentage", () => {
    const props: TitleValuePercentageProps = {
      title: "Total Investment",
      value: "1,000,000",
      changePercentage: "-10%",
    };
    render(<TitleValuePercentage {...props} />);
    expect(screen.getByText("Total Investment")).toBeInTheDocument();
    expect(screen.getByText("1,000,000")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
  });
});