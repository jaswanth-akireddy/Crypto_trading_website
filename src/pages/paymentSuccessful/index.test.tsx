import React from "react";
import { render, screen } from "@testing-library/react";
import PaymentSuccessfulScreen from "./index";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
it("should render the Success buy screen", async () => {
  render(
    <BrowserRouter>
      <PaymentSuccessfulScreen price="0.0234510 BTC" successType="sell" />
    </BrowserRouter>
  );
  const wrapper = screen.getByTestId("transaction-success-container");
  expect(wrapper).toBeInTheDocument();
});
it("should render the Success sell screen", async () => {
  render(
    <BrowserRouter>
      <PaymentSuccessfulScreen price="0.0234510 BTC" successType="buy" />
    </BrowserRouter>
  );
  const wrapper = screen.getByTestId("transaction-success-container");
  expect(wrapper).toBeInTheDocument();
});
