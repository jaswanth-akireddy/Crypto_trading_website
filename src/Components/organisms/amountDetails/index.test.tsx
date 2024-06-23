import AmountDetails from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

describe("Amount Details", () => {
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <AmountDetails />
      </Provider>
    );
    const titleElement = screen.getByText("Amount details");
    expect(titleElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toBeInTheDocument();
    fireEvent.change(sliderElement, { target: { value: 45 } });
    expect(sliderElement).toHaveValue("45");
    const bitcoinvalueElement = screen.getByText("1BTC = $3,406,069.54");
    expect(bitcoinvalueElement).toBeInTheDocument();
    const currencyElement = screen.getByText("BTC");
    expect(currencyElement).toBeInTheDocument();
  });
});
