import { render, screen, fireEvent } from "@testing-library/react";
import WatchTable, { TradeTabsProps } from "./index";
import { Row } from "../watchlist/index.stories";
import Bitcoin from "../../../assets/icons/bitcoin.svg";
const mockCheckWatchList = jest.fn();
const mockOnCheckboxChange = jest.fn();

const data: Row[] = [
  {
    imgSrc: Bitcoin,
    name: "Bitcoin",
    code: "BTC",
    price: "$ 3,285,553.73",
    change: "+1.06%",
    marketcap: 60.1,
  },
];

const props: TradeTabsProps = {
  data: data,
  checked: true,
  checkWatchList: mockCheckWatchList,
  onCheckboxChange: mockOnCheckboxChange,
  searchTerm: "",
};

describe("WatchTable", () => {
  it("renders a table with the correct columns", () => {
    render(<WatchTable {...props} />);
    const nameColumn = screen.getByText("Name");
    const priceColumn = screen.getByText("Price");
    const changeColumn = screen.getByText("Change");
    const marketCapColumn = screen.getByText("Market Cap");
    const watchColumn = screen.getByText("Watch");
    expect(nameColumn).toBeInTheDocument();
    expect(priceColumn).toBeInTheDocument();
    expect(changeColumn).toBeInTheDocument();
    expect(marketCapColumn).toBeInTheDocument();
    expect(watchColumn).toBeInTheDocument();
  });

  it("renders the provided data", () => {
    render(<WatchTable {...props} />);
    const name = screen.getByText("Bitcoin");
    const code = screen.getByText("BTC");
    const price = screen.getByText("$ 3,285,553.73");
    const change = screen.getByText("+1.06%");
    const marketcap = screen.getByText("$60.1T");
    const checkbox = screen.getByRole("checkbox");
    expect(name).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(change).toBeInTheDocument();
    expect(marketcap).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  it("calls checkWatchList when checkbox is checked", () => {
    render(<WatchTable {...props} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockCheckWatchList).toHaveBeenCalledTimes(1);
  });

  it("calls onCheckboxChange when checkbox is clicked", () => {
    render(<WatchTable {...props} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnCheckboxChange).toHaveBeenCalledTimes(1);
  });

  it("check for negative change", () => {
    const row = data;
    row[0].change = "-3.5";
    const newProp = props;
    newProp.data = row;
    render(<WatchTable {...newProp} />);
    const changeColmn = screen.getByText("Change");
    expect(changeColmn).toBeInTheDocument();
  });
});
