import React from "react";
import { render, screen } from "@testing-library/react";
import Graph, { GraphProps } from ".";

const testData = [
    { date: "JUN 8", coinValue: 1000 },
    { date: "JUN 15", coinValue: 3000 },
    { date: "JUN 22", coinValue: 2000 },
];

describe("Graph", () => {
  it("renders an area chart with the correct props", () => {
    const props: GraphProps = { data: testData, height: 300, width: 500 };
    render(<Graph {...props} />);
    const areaChart = screen.getByTestId("area-chart");
    expect(areaChart).toBeInTheDocument();
  });
});


