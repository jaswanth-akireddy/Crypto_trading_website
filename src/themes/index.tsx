import {
  createTheme,
  
  Color,
} from "@mui/material";

type ColorPartial = Partial<Color>;
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    textColor: {
      low: string;
      medium: string;
      high: string;
      default: string;
    };
  }

  interface Palette {
    textColor: {
      low: string;
      medium: string;
      high: string;
      default: string;
    };
  }

  interface TypographyVariants {
    body: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    title: React.CSSProperties;
    gammaRegular: React.CSSProperties;
    captionRegular: React.CSSProperties;
    overline2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    title?: React.CSSProperties;
    gammaRegular?: React.CSSProperties;
    captionRegular?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body: true;
    caption1: true;
    caption2: true;
    title: true;
    gammaRegular: true;
    captionRegular: true;
    overline2: true;
  }
}

let theme = createTheme({
  spacing: [4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      "100": "#FAFCFF",
      "300": "#66A1FF",
      "500": "#0052FF",
      "700": "#002EB7",
      "900": "#00177A",
    },
    success: {
      "100": "#E9F7EC",
      "500": "#46BF31",
      "600": "#20B03F",
    },
    warning: {
      "100": "#FFF6ED",
      "500": "#FFA74F",
    },
    error: {
      "100": "#F3E6EB",
      "500": "#B71A33",
    },
    grey: {
      "50": "#F2F2F7",
      "100": "#E8E8F7",
      "300": "#B4B4CF",
      "500": "#4B4B60",
      "700": "#252545",
      "900": "#0E0E2E",
    },
    textColor: {
      low: "#B2B2B9",
      medium: "#7D7D89",
      high: "#343446",
      default: "#FFFFFF",
    },
  },

  typography: {
    h4: {
      fontFamily: "Graphik-semibold",
      fontSize: "40px",
      lineHeight: "54px",
      fontWeight: "500",
      textTransform: "none",
    },
    h6: {
      fontFamily: "Graphik-semibold",
      fontSize: "24px",
      lineHeight: "34px",
      fontWeight: "400",
      textTransform: "none",
    },

    subtitle1: {
      fontFamily: "Graphik-semibold",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "500",
      textTransform: "none",
    },
    subtitle2: {
      fontFamily: "Graphik-regular",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "400",
      textTransform: "none",
    },
    body1: {
      fontFamily: "Graphik-semibold",
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "500",
      textTransform: "none",
    },
    body2: {
      fontFamily: "Graphik-regular",
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "400",
      textTransform: "none",
    },
    caption1: {
      fontFamily: "Graphik-medium",
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "500",
      textTransform: "none",
    },
    caption2: {
      fontFamily: "Graphik-regular",
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "400",
      textTransform: "none",
    },
    button: {
      fontFamily: "Graphik-semibold",
      fontSize: "14px",
      lineHeight: "42px",
      fontWeight: "500",
      textTransform: "none",
    },
    overline: {
      fontFamily: "Graphik-regular",
      fontSize: "12px",
      lineHeight: "14px",
      fontWeight: "400",
      textTransform: "none",
    },
  },
});

const shadows = theme.shadows;
shadows[1] = "0px 1px 10px rgba(44, 44, 44, 0.08)";

theme = createTheme({ ...theme, shadows });
export default theme;