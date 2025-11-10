import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <Box
          component="div"
          sx={{
            bgcolor: theme.palette.background.default,
          }}
        >
          <NavBar />
          <RouterProvider router={router} />
          <Footer />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
