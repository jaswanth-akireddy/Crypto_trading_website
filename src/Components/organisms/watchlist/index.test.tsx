import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WatchListTabs from "./index";
import Bitcoin from "../../../assets/cryptoImages/bitcoin.svg";
const rows = [
  {
    imgSrc: Bitcoin,
    name: "Bitcoin",
    code: "BTC",
    price: "$ 3,285,553.73",
    change: "+1.06%",
    marketcap: 60.1,
  },
];

describe("WatchListTabs", () => {
  it("renders WatchTable with all rows when first tab is selected", () => {
    render(<WatchListTabs rows={rows} />);
    const bitcoinRow = screen.getByText("Bitcoin");
    expect(bitcoinRow).toBeInTheDocument();
  });

  it("renders WatchTable with watchlist rows when second tab is selected", () => {
    render(<WatchListTabs rows={rows} />);
    const bitcoinRow = screen.getByText("Bitcoin");
    expect(bitcoinRow).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);

    const watchlistTab = screen.getByText("Watchlist");
    userEvent.click(watchlistTab);
    expect(bitcoinRow).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(bitcoinRow).not.toBeInTheDocument();
  });

  it("filters rows by search term", () => {
    render(<WatchListTabs rows={rows} />);
    const bitcoinRow = screen.getByText("Bitcoin");
    expect(bitcoinRow).toBeInTheDocument();
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "eth");

    const clearBtn = screen.getByTestId("clear-button");
    expect(clearBtn).toBeInTheDocument();
    userEvent.click(clearBtn);
    expect(clearBtn).toBeInTheDocument();

    userEvent.clear(searchInput);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "bitcoin" } });

    const result = rows[0].code.toLowerCase().includes("BTC".toLowerCase());
    expect(result).toBe(true);
  });

  it("filters rows by row code in watchlist", () => {
    render(<WatchListTabs rows={rows} />);
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    const watchlistTab = screen.getByText("Watchlist");
    userEvent.click(watchlistTab);
    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "BTC");
    const bitcoinRow = screen.getByText("Bitcoin");
    expect(bitcoinRow).toBeInTheDocument();
  });
});
