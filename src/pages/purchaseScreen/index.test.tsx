import { render, screen } from "@testing-library/react";
import PurchaseScreen from "./index";
import { Provider } from "react-redux";
import store from "../../Components/store";
import { BrowserRouter } from "react-router-dom";

describe("PurchaseScreen", () => {
  test("renders the checkout header", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PurchaseScreen />
        </Provider>
      </BrowserRouter>
    );
    const checkoutHeader = screen.getByText("Checkout");
    expect(checkoutHeader).toBeInTheDocument();
  });

  test("renders the Buy Crypto section", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PurchaseScreen />
        </Provider>
      </BrowserRouter>
    );
    const buyCryptoSection = screen.getByText("Buy Crypto");
    expect(buyCryptoSection).toBeInTheDocument();
  });

  test("renders the Payment Method component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PurchaseScreen />
        </Provider>
      </BrowserRouter>
    );
    const paymentMethod = screen.getByText("Payment Method");
    expect(paymentMethod).toBeInTheDocument();
  });
});
