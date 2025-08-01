import { createTheme } from "@mui/material/styles";
import Vazir from "/fonts/Vazir.woff";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1E55B3",
    },
    secondary: {
      main: "#2C8986",
    },
    background: {
      default: "#F1F1E6",
    },
  },
  typography: {
    fontFamily: "Vazir",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Vazir';
          src: url(${Vazir}) format('woff');
        }
      `,
    },
  },
});
