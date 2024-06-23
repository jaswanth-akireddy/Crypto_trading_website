import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField, { InputProps } from "./index";
import "@testing-library/jest-dom";

describe("InputField", () => {
  const defaultProps: InputProps = {
    placeHolder: "Enter text",
    handleChange: () => {},
    formtextcolor: "primary",
  };

  it("should render the InputField component", () => {
    render(<InputField {...defaultProps} />);
    const inputField = screen.getByTestId("input");
    expect(inputField).toBeInTheDocument();
  });

  it("should render the correct placeholder text", () => {
    render(<InputField {...defaultProps} />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("should call the handleChange function when the input value is changed", () => {
    const handleChange = jest.fn();
    render(<InputField {...defaultProps} handleChange={handleChange} />);
    const input = screen.getByPlaceholderText("Enter text");
    userEvent.type(input, "hello");
    expect(handleChange).toHaveBeenCalledTimes(5); // 'hello' contains 5 characters
  });

  it("should have end adornment element when endAdornment prop is provided", () => {
    const endAdornment = <div data-testid="end-adornment">End Adornment</div>;
    render(<InputField {...defaultProps} endAdornment={endAdornment} />);
    const endAdornmentElement = screen.getByTestId("end-adornment");
    expect(endAdornmentElement).toBeInTheDocument();
  });

  it("should call the onBlur function when the input is blurred", () => {
    const onBlur = jest.fn();
    render(<InputField {...defaultProps} onBlur={onBlur} />);
    const input = screen.getByPlaceholderText("Enter text");
    input.focus();
    input.blur();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
