import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { title: "محصولات", path: "/products" },
  { title: "قیمت گذاری", path: "/pricing" },
  { title: "تماس با ما", path: "/contact" },
];

function NavBar() {
  return (
    <AppBar
      component="nav"
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo Brand */}
        <Box sx={{ flexGrow: 1 }}>
          <a
            href="/"
            style={{ textDecoration: "none" }}
            title="بازرگانی استیل بابک - صفحه اصلی"
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                component="img"
                src="/steel_babak_icon.svg"
                alt="Steel Babak Logo"
                sx={{ height: 40 }}
                width={40}
                height={40}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "text.primary",
                  fontWeight: 600,
                }}
              >
                بازرگانی استیل بابک
              </Typography>
            </Stack>
          </a>
        </Box>

        {/* Navigation Links */}
        <Box component="nav" sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              href={item.path}
              sx={{
                mx: 0.5,
                color: "text.primary",
                fontWeight: 500,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "action.hover",
                },
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
