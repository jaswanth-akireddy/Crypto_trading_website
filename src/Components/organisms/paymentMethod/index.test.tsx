import { render, screen, waitFor } from "@testing-library/react";
import { PaymentMethod } from "./index";
import axios from "axios";
import {getImage} from './index'


const mockData = [
  {
    id: 1,
    iconURL: "https://via.placeholder.com/50",
    coinName: "Bitcoin",
    balance: "10000.00",
  },
];

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: mockData })),
}));

describe("PaymentMethod", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it("should render error message if API call fails", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API error"));

    render(<PaymentMethod subTitle="Wallets" isActive={true}/>);

    await waitFor(() => expect(screen.getByTestId("error")).toBeInTheDocument());

    expect(screen.getByTestId("error")).toHaveTextContent("can't load the page");
  });



  

});


describe("getImage", () => {
  it("returns the correct image URL", () => {
    const pathname = "ellipse.svg";
    const { getByAltText } = render(
      <img src={getImage(pathname)} alt="test image" />
    );
    const imgElement = getByAltText("test image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute("src")).toBe("rupee.svg");
  });
});

