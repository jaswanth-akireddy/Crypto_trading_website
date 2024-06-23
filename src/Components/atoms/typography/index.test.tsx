import { render, screen } from "@testing-library/react";
import Typography from "./index";
import { ThemeProvider } from "@mui/material";
import theme from "../../../themes";

test("renders Login Heading correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="Login to Minet"
        variant="h4"
        sx={{ color: theme.palette.textColor.high }}
      />
    </ThemeProvider>
  );
  const headingElement = screen.getByRole("heading", {
    level: 4,
  });
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent("Login to Minet");
  expect(headingElement).toHaveStyle({ color: "#343446" });
  expect(headingElement).toHaveStyle({ fontFamily: "Graphik-semibold" });
});

test("renders dashboard heading correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="Dashboard"
        variant="h6"
        sx={{ color: theme.palette.textColor.high }}
      />
    </ThemeProvider>
  );
  const dashboardHeading = screen.getByText("Dashboard");
  expect(dashboardHeading).toBeInTheDocument();
  const HeadingElement = screen.getByRole("heading", {
    level: 6,
  });
  expect(HeadingElement).toBeInTheDocument();
  expect(HeadingElement).toHaveStyle({ fontSize: "24px" });
});

test("renders subtitle1 correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="Watchlist"
        variant="subtitle1"
        sx={{ color: theme.palette.textColor.high }}
      />
    </ThemeProvider>
  );
  const subtitleElement = screen.getByText("Watchlist");
  expect(subtitleElement).toBeInTheDocument();
  expect(subtitleElement).toHaveStyle({ color: "#343446" });
  expect(subtitleElement).toHaveStyle({ fontSize: "20px" });
  expect(subtitleElement).toHaveStyle({ fontWeight: "500" });
});

test("renders caption correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="Total Investment"
        variant="caption1"
        sx={{ color: theme.palette.textColor.medium }}
      />
    </ThemeProvider>
  );
  const captionElement = screen.getByText("Total Investment");
  expect(captionElement).toBeInTheDocument();
  expect(captionElement).toHaveStyle({ color: "#7D7D89" });
  expect(captionElement).toHaveStyle({ fontFamily: "Graphik-medium" });
});

test("renders body1 correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="Bitcoin"
        variant="body1"
        sx={{ color: theme.palette.textColor.high }}
      />
    </ThemeProvider>
  );
  const BitcoinElement = screen.getByText("Bitcoin");
  expect(BitcoinElement).toBeInTheDocument();
  expect(BitcoinElement).toHaveStyle({ color: "#343446" });
  expect(BitcoinElement).toHaveStyle({ fontFamily: "Graphik-semibold" });
  expect(BitcoinElement).toHaveStyle({ fontSize: "16px" });
});

test("renders overline correctly", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography
        children="+0.0%"
        variant="overline"
        sx={{ color: theme.palette.success[500] }}
      />
    </ThemeProvider>
  );
  const overlineElement = screen.getByText("+0.0%");
  expect(overlineElement).toBeInTheDocument();
  expect(overlineElement).toHaveStyle({ color: "#46BF31" });
  expect(overlineElement).toHaveStyle({ fontSize: "12px" });
  expect(overlineElement).toHaveStyle({ fontFamily: "Graphik-regular" });
});
