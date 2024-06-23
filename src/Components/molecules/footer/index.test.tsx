import { render, screen } from "@testing-library/react";
import Footer from "./";

describe("Footer", () => {
  it("renders the footer links", () => {
    render(<Footer />);
    const dashboardLink = screen.getByText("Dashboard");
    const careersLink = screen.getByText("Careers");
    const legalLink = screen.getByText("Legal & Privacy");
    const copyrightText = screen.getByText("© 2021 Minet");
    expect(dashboardLink).toBeInTheDocument();
    expect(careersLink).toBeInTheDocument();
    expect(legalLink).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders the language dropdown", () => {
    render(<Footer />);
    const languageDropdown = screen.getAllByText("ENGLISH");
    expect(languageDropdown[0]).toHaveTextContent("ENGLISH");
  });

  it('renders the "Need Help" button', () => {
    render(<Footer />);
    const needHelpButton = screen.getByRole("button", { name: "NEED HELP" });
    expect(needHelpButton).toBeInTheDocument();
  });
});
