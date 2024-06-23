import { render, screen } from "@testing-library/react";
import OrderSummary from ".";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("Order Summary", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <OrderSummary />
        </Provider>
      </BrowserRouter>
    );
    const TextElement1 = screen.getByText("You are buying");
    expect(TextElement1).toBeInTheDocument();
    const TextElement2 = screen.getAllByText("0.0234510 BTC");
    expect(TextElement2[0]).toBeInTheDocument();
    expect(TextElement2[1]).toBeInTheDocument();
    const TextElement3 = screen.getByText("1BTC = $3,406,069.54");
    expect(TextElement3).toBeInTheDocument();
    const TextElement4 = screen.getByText(/Payment method/i);
    expect(TextElement4).toBeInTheDocument();
    const TextElement5 = screen.getByText(/Visa credit ...8845/i);
    expect(TextElement5).toBeInTheDocument();
    const TextElement6 = screen.getByText(/Delivery fees/i);
    expect(TextElement6).toBeInTheDocument();
    const TextElement7 = screen.getByText(/0.001 BTC/i);
    expect(TextElement7).toBeInTheDocument();
    const TextElement8 = screen.getByText(/Deposit to/i);
    expect(TextElement8).toBeInTheDocument();
    const TextElement9 = screen.getByText(/Bitcoin wallet/i);
    expect(TextElement9).toBeInTheDocument();
    const TextElement11 = screen.getByText(/transaction fee/i);
    expect(TextElement11).toBeInTheDocument();
    const TextElement13 = screen.getByText(/Total/i);
    expect(TextElement13).toBeInTheDocument();
    const BankCardElement = screen.getByAltText("Bank Card Icon");
    expect(BankCardElement).toBeInTheDocument();
    const DeliveryIconElement = screen.getByAltText("Delivery Icon");
    expect(DeliveryIconElement).toBeInTheDocument();
    const WalletIconElement = screen.getByAltText("Wallet Icon");
    expect(WalletIconElement).toBeInTheDocument();
    const ButtonElement = screen.getByRole("button");
    expect(ButtonElement).toBeInTheDocument();
    user.click(ButtonElement);
  });
});
