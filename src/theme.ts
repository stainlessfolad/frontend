import { createTheme } from "@mui/material/styles";
import Vazir from "/fonts/Vazir.woff";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1E55B3",
    },
    secondary: {
      main: "#1a7975ff",
    },
    background: {
      default: "#f5fbfdff",
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
    MuiButton: {
      styleOverrides: {
        // TODO: Find a way to change color on hover
        // contained: {
        //   "&:hover": {
        //     backgroundColor: "#000"
        //   }
        // }
      },
    },
  },
});
