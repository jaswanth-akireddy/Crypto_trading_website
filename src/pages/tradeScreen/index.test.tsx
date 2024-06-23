import React from "react";
import { render, screen } from "@testing-library/react";
import TradeScreen from "./index";
import { BrowserRouter } from "react-router-dom";

describe("TradeScreen", () => {
  it("renders the Navbar component", () => {
    render(
      <BrowserRouter>
        <TradeScreen />
      </BrowserRouter>
    );
    const MinutLogo = screen.getByAltText("Minet Logo");
    expect(MinutLogo).toBeInTheDocument();
  });
  it("renders the ApplicationHeader component with the correct title", () => {
    render(
      <BrowserRouter>
        <TradeScreen />
      </BrowserRouter>
    );
    const headerElement = screen.getByText("Trade");
    expect(headerElement).toBeInTheDocument();
  });
  it("renders the WatchListTabs component with the correct rows", () => {
    render(
      <BrowserRouter>
        <TradeScreen />
      </BrowserRouter>
    );
    const bitcoinRowElement = screen.getByText("Bitcoin");
    expect(bitcoinRowElement).toBeInTheDocument();
  });
  it("renders the Footer component", () => {
    render(
      <BrowserRouter>
        <TradeScreen />
      </BrowserRouter>
    );
    const footerElement = screen.getByText("Dashboard");
    expect(footerElement).toBeInTheDocument();
  });
});
