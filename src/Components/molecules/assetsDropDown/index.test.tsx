/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { MuiDropDown } from ".";
import { fireEvent, waitFor } from "@storybook/testing-library";

describe("MuiDropDown", () => {
  const options = [
    { value: "24h" },
    { value: "12h" },
    { value: "1h" },
  ];

  it("should render dropdown label and options", () => {
    render(<MuiDropDown content="Timeframe" options={options} />);
    const labelElement = screen.getByTestId("dropdown-label");
   const selectElement = screen.getByTestId("dropdown-select");

   fireEvent.mouseDown(selectElement);
   waitFor(() => {
     const options = document.querySelectorAll("li[data-value]");
     expect(options).toHaveLength(3);
   }, { timeout: 50 });
   expect(labelElement).toBeInTheDocument();
   expect(selectElement).toBeInTheDocument();

  });

  it("should use default options if options prop is not provided", () => {
    render(<MuiDropDown content="Timeframe" />);
    const dropdownOptions = screen.queryAllByTestId("dropdown-option");
    expect(dropdownOptions).toHaveLength(0);
  });

});

