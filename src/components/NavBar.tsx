import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Stack,
  Typography,
  lighten,
  alpha,
  darken,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { title: "محصولات", path: "/products", disabled: true },
  { title: "قیمت گذاری", path: "/pricing", disabled: true },
  { title: "تماس با ما", path: "/contact-us", disabled: false },
];

function NavBar() {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        background: alpha(lighten(theme.palette.primary.main, 0.7), 0.7),
        backdropFilter: "blur(5px)",
      }}
    >
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Brand */}
        <Box sx={{ flexGrow: 1 }}>
          <a href="/">
            <Stack
              direction="row"
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/steel_babak_icon.svg"
                sx={{ height: 50 }}
              />
              <Typography
                variant="h5"
                sx={{
                  display: { xs: "none", sm: "inline" },
                  color: darken(theme.palette.primary.main, 0.85),
                  pl: 1,
                }}
              >
                بازرگانی استیل بابک
              </Typography>
            </Stack>
          </a>
        </Box>

        {/* Button Group */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              href={item.path}
              disabled={item.disabled}
              variant="contained"
              sx={{
                mx: 1,
                borderRadius: 50,
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
