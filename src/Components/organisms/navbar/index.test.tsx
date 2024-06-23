import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";

describe("Navbar", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const MinetLogoElement = screen.getByAltText("Minet Logo");
    expect(MinetLogoElement).toBeInTheDocument();
    const DashboardIconElement = screen.getByAltText("Dashboard Icon");
    expect(DashboardIconElement).toBeInTheDocument();
    const PortfolioIconElement = screen.getByAltText("Portfolio Icon");
    expect(PortfolioIconElement).toBeInTheDocument();
    const TradeIconElement = screen.getByAltText("Trade Icon");
    expect(TradeIconElement).toBeInTheDocument();
    const NotificationIconElement = screen.getByAltText("Notification Icon");
    expect(NotificationIconElement).toBeInTheDocument();
    const LogoutIconElement = screen.getByAltText("Logout Icon");
    expect(LogoutIconElement).toBeInTheDocument();
  });

  test("handles click event for Dashboard icon and navigates to dashboard page", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const dashboardIcon = screen.getByAltText("Dashboard Icon");
    fireEvent.click(dashboardIcon);
    const dashboardBlueIcon = screen.getByAltText("Dashboard Icon");
    expect(dashboardBlueIcon.getAttribute("src")).toContain(
      "blueDashBoard.svg"
    );
  });

  test("handles click event for Trade icon and navigates to WatchListTabs page", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const tradeIcon = screen.getByAltText("Trade Icon");
    fireEvent.click(tradeIcon);
    const tradeBlueIcon = screen.getByAltText("Trade Icon");
    expect(tradeBlueIcon.getAttribute("src")).toContain("blueTrade.svg");
  });

  test("should switch icons back to default when clicked on blue icons", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const dashboardIcon = screen.getByAltText(
      "Dashboard Icon"
    ) as HTMLImageElement;
    const tradeIcon = screen.getByAltText("Trade Icon") as HTMLImageElement;
    fireEvent.click(dashboardIcon);
    expect(dashboardIcon.src.split("/").slice(-1)[0]).toEqual(
      "blueDashBoard.svg"
    );
    fireEvent.click(dashboardIcon);
    expect(dashboardIcon.src.split("/").slice(-1)[0]).toEqual(
      "blueDashBoard.svg"
    );
    fireEvent.click(tradeIcon);
    expect(tradeIcon.src.split("/").slice(-1)[0]).toEqual("blueTrade.svg");
  });
});
