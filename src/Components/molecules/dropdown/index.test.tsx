import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DropDown from "./";

describe("DropDown", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  it("should display the default Options", () => {
    render(<DropDown options={options} />);
    const option = screen.getAllByTestId("ExpandMoreIcon");
    expect(option).toHaveLength(1);
    fireEvent.click(option[0]);
    const menuItem = screen.getAllByRole("menuitem");
    expect(menuItem).toHaveLength(options.length);
    fireEvent.click(menuItem[0]);
  });
});
