import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EmptyStateWatchListSection from ".";

describe("EmptyStateWatchListSection component", () => {
  test("renders Watchlist title", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const titleElement = screen.getByText("Watchlist");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders View Watchlist link", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/View Watchlist/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Discover asserts link", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Discover asserts/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Bitcoin name and price", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const nameElement = screen.getByText("Bitcoin");
    const priceElement = screen.getByText("$3,00,439.93");
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test("renders 24h change", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const changeElement = screen.getByText(/24h/i);
    expect(changeElement).toBeInTheDocument();
  });

  test("renders graph with given data", () => {
    render(
      <BrowserRouter>
        <EmptyStateWatchListSection />
      </BrowserRouter>
    );
    const graphElement = screen.getByTestId("area-chart");
    expect(graphElement).toBeInTheDocument();
  });
});
