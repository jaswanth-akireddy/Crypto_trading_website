import { fireEvent, render, screen } from "@testing-library/react";
import CryptoCurrency from ".";

describe("CryptoCurrency", () => {
  test("renders correctly", () => {
    render(<CryptoCurrency />);
    const chooseElement = screen.getByText(/choose crypto/i);
    expect(chooseElement).toBeInTheDocument();
    const ImageElement = screen.getByAltText(/Bitcoin Image/i);
    expect(ImageElement).toBeInTheDocument();
    const NameElement = screen.getByText(/Bitcoin/i);
    expect(NameElement).toBeInTheDocument();
    const ValueElement = screen.getByText("$3,406,069.54");
    expect(ValueElement).toBeInTheDocument();
  });

  it("clicking checkbox logs selected crypto and value", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<CryptoCurrency />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Selected Crypto: Bitcoin, it has value $3,406,069.54"
    );
    consoleSpy.mockRestore();
  });
});
