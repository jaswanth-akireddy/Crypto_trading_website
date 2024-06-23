/* eslint-disable testing-library/no-node-access */
import { render, fireEvent,screen } from "@testing-library/react";
import Star from ".";

describe("Star", () => {
  it("should render an unchecked star by default", () => {
    render(<Star id="star" checked={false} />);
    const checkboxElement = screen.getByTestId("star-checkbox");

    expect(checkboxElement).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("should render a checked star when checked prop is true", () => {
     render(<Star id="star" checked={true} />);
    const checkboxElement = screen.getByTestId("star-checkbox");

    expect(checkboxElement).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
   expect(checkbox.checked).toBe(true);
  });


  test("should call the onCheckboxChange function when clicked", () => {
    const onCheckboxChange = jest.fn();
 render(<Star id="test" checked={false} onCheckboxChange={onCheckboxChange} />);
  const checkbox = screen.getByTestId("star-checkbox");

  fireEvent.click(checkbox.firstChild!);

  expect(onCheckboxChange).toHaveBeenCalledTimes(1);
  });
});