import { createTheme } from "@mui/material/styles";
import VazirWoff2 from "/fonts/Vazir.woff2";
import VazirTtf from "/fonts/Vazir.ttf";

const primaryGradient =
  "linear-gradient(120deg, #ff5c33 0%, #ff8941 55%, #ffc878 100%)";
const primaryHover = "linear-gradient(120deg, #ff753f 0%, #ff9b60 100%)";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      light: "#6af1ff",
      main: "#00b5ff",
      dark: "#0078a1",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff8c58",
      main: "#ff5c33",
      dark: "#c9441f",
      contrastText: "#041524",
    },
    info: {
      light: "#ffedca",
      main: "#f3c25b",
      dark: "#c18e2e",
    },
    warning: {
      main: "#ff9a1b",
    },
    success: {
      main: "#07b376",
    },
    background: {
      default: "#fff8f1",
      paper: "#fffcfa",
    },
    text: {
      primary: "#1f1d1b",
      secondary: "#4c4440",
    },
    action: {
      hover: "rgba(255, 100, 50, 0.12)",
      selected: "rgba(255, 92, 51, 0.15)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Vazir, VazirMatn, 'Segoe UI', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    h1: {
      fontWeight: 700,
      letterSpacing: "0.03em",
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazir';
          src: url(${VazirWoff2}) format('woff2'),
            url(${VazirTtf}) format('truetype'),
            local('VazirMatn');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "0.65rem 1.4rem",
          letterSpacing: "0.02em",
          boxShadow: "0 6px 18px rgba(22, 26, 43, 0.12)",
        },
        containedPrimary: {
          background: primaryGradient,
          color: "#fff",
          fontWeight: 600,
          transition: "background 240ms ease, box-shadow 200ms ease",
          "&:hover": {
            background: primaryHover,
            boxShadow: "0 10px 22px rgba(22, 26, 43, 0.18)",
          },
          "&:active": {
            boxShadow: "none",
          },
        },
        outlinedSecondary: {
          borderColor: "rgba(0, 181, 255, 0.4)",
          color: "#0078a1",
          "&:hover": {
            borderColor: "#00b5ff",
            backgroundColor: "rgba(0, 181, 255, 0.06)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          boxShadow: "0 10px 32px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.7,
        },
      },
    },
  },
});
