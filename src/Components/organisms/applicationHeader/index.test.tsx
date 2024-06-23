import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ApplicationHeader from "./index";

describe("ApplicationHeader component", () => {
  const headerProps = {
    title: "My Title",
    imgSrc: "https://example.com/img.jpg",
    imgAlt: "Alt Text",
    isHeader: false,
  };

  test("renders header title", () => {
    const newProp = headerProps;
    newProp.isHeader = true;
    render(
      <BrowserRouter>
        <ApplicationHeader {...newProp} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(headerProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders sell and buy buttons", () => {
    render(
      <BrowserRouter>
        <ApplicationHeader {...headerProps} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(headerProps.title);
    expect(titleElement).toBeInTheDocument();

    const sellButtonElement = screen.getByText("Sell");
    expect(sellButtonElement).toBeInTheDocument();

    const buyButtonElement = screen.getByText("Buy");
    expect(buyButtonElement).toBeInTheDocument();
  });

  test("navigates to purchase screen on clicking Buy button", () => {
    render(
      <BrowserRouter>
        <ApplicationHeader {...headerProps} />
      </BrowserRouter>
    );

    const buyButtonElement = screen.getByText("Buy");
    expect(buyButtonElement).toBeInTheDocument();

    userEvent.click(buyButtonElement);
  });
});
