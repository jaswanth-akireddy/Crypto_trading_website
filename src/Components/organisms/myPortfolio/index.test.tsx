import MyPortfolio from ".";
import { render, screen } from "@testing-library/react";

describe("My Portfolio Section", () => {
  test("renders correctly", () => {
    render(
      <MyPortfolio
        currencyValue="$ 0.00"
        profitOrLoss="+0.00%"
        totalBalance="$ 0.00"
      />
    );
    const HeadingElement1 = screen.getByText(/My portfolio/i);
    const HeadingElement2 = screen.getByText(/My wallets/i);
    expect(HeadingElement1).toBeInTheDocument();
    expect(HeadingElement2).toBeInTheDocument();
    const ChartElement = screen.getByAltText(/Chart Icon/i);
    const ListElement = screen.getByAltText(/List Icon/i);
    expect(ChartElement).toBeInTheDocument();
    expect(ListElement).toBeInTheDocument();
    const BitcoinImageElement = screen.getByAltText(/Bitcoin Image/i);
    const BitcoinElement = screen.getByText(/Bitcoin/i);
    const BTCElement = screen.getByText(/BTC/i);
    expect(BitcoinImageElement).toBeInTheDocument();
    expect(BitcoinElement).toBeInTheDocument();
    expect(BTCElement).toBeInTheDocument();
    const BitcoinValueElement = screen.getAllByText("$ 0.00");
    expect(BitcoinValueElement[0]).toBeInTheDocument();
    expect(BitcoinValueElement[1]).toBeInTheDocument();
    expect(BitcoinValueElement[2]).toBeInTheDocument();
    const ProfitOrLossElement = screen.getByText("+0.00%");
    expect(ProfitOrLossElement).toBeInTheDocument();
    const TotalElement = screen.getByText(/Total Balance/i);
    expect(TotalElement).toBeInTheDocument();
    const dividers = screen.getAllByRole("separator");
    expect(dividers[0]).toBeInTheDocument();
    expect(dividers[1]).toBeInTheDocument();

    const DollarIconElement = screen.getByAltText(/Dollar Icon/i);
    expect(DollarIconElement).toBeInTheDocument();
    const USDcoinElement = screen.getByText("USD Coin");
    expect(USDcoinElement).toBeInTheDocument();
    const DollarTextElement = screen.getByText("US Dollar");
    expect(DollarTextElement).toBeInTheDocument();
  });
});
