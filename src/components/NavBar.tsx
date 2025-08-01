import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Products", "Pricing", "Contact"];

function NavBar() {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLogo color={theme.palette.primary.contrastText} />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "primary.contrastText" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;

function NavLogo({ color = "#fff" }: { color?: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <a href="/">
        <Stack
          direction="row"
          sx={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {/* <Logo fill={color} height={40} /> */}
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "inline" },
              color: color,
              pl: 1,
            }}
          >
            Gsteel Products
          </Typography>
        </Stack>
      </a>
    </Box>
  );
}
