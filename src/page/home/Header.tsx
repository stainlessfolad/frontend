import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

function Header() {
  return (
    <Box
      component="header"
      color="primary"
      sx={{
        backgroundColor: "secondary.dark",
        color: "secondary.contrastText",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 12,
        px: 8,
      }}
    >
      <Box
        component="div"
        width="40%"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TubeLight height="100px" color="#fff" />
        <HeroContent />
      </Box>
    </Box>
  );
}
export default Header;

function HeroContent({ width = "100%" }: { width?: string }) {
  return (
    <Box
      sx={{
        width: width,
        left: 0,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" } }}
      >
        فروش ورق استیل
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          fontSize: { xs: "1rem", md: "1.25rem" },
          color: "grey.400",
        }}
      >
        واردات مستقیم و بدون واسطه انواع استیل با کیفیت عالی، کمترین قیمت و
        ارسال سریع به تمام نقاط ایران
      </Typography>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          // TODO: Contact us section or page
          href="#contact-us"
          sx={{ textTransform: "none" }}
        >
          تماس با ما
        </Button>
        {/* <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="#contact"
          sx={{ textTransform: "none" }}
        >
          Learn More
        </Button> */}
      </Box>
    </Box>
  );
}

function TubeLight({
  width = "100%",
  height = "10px",
  color,
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing="-1px"
      sx={{
        direction: "ltr",
        width,
        height,
        top: 0,
        marginBottom: 2,
        position: "relative",
        WebkitMask: `linear-gradient(rgba(0, 0, 0, 0.4), transparent)`,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background: `conic-gradient(
            from 90deg at 60px 0%,
            ${color ?? theme.palette.primary.main} 105deg,
            transparent 125deg
          )`,
        }}
      ></Box>
      <Box
        sx={{
          flexGrow: 1,
          background: `conic-gradient(
            from 90deg at 60px 0%,
            ${color ?? theme.palette.primary.main} 105deg,
            transparent 125deg
          )`,
          transform: "scaleX(-1)",
        }}
      ></Box>
    </Stack>
  );
}
