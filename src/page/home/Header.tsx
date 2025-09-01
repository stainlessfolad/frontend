import {
  Box,
  Button,
  lighten,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "secondary.dark",
        color: "secondary.contrastText",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-evenly",
        paddingBottom: 12,
        px: 8,
      }}
    >
      {/* Content Side */}
      <Stack width={{ xs: "100%", md: "40%" }} alignItems="flex-end">
        {/* Tubelight Effect */}
        <Stack
          direction="row-reverse"
          spacing="-1px"
          sx={{
            width: "100%",
            height: "100px",
            top: 0,
            marginBottom: 2,
            position: "relative",
            WebkitMask: `linear-gradient(rgba(0, 0, 0, 0.4), transparent)`,
          }}
        >
          <Tubelight />
          <Tubelight reverse />
        </Stack>

        {/* Header Text Content */}
        <Stack component="div">
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" } }}
          >
            گروه بازرگانی استیل
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "grey.400",
            }}
          >
            تامین کننده مستقیم انواع ورق استیل به همراه گواهی تیسکو با هدف فروش
            بدون واسطه و ارسال سریع به تمام نقاط ایران
          </Typography>
        </Stack>

        <Button
          variant="contained"
          size="large"
          href="/contact-us"
          sx={{ mt: 4 }}
        >
          اطلاعات بیشتر
        </Button>
      </Stack>

      {/* Picture Side */}
      <Box
        component="img"
        src="/public/images/header_rolled_steel_and_sheets.webp"
        alt="Rolled Steel and Sheets"
        sx={{
          objectFit: "cover",
          minHeight: { xs: "200px" },
          width: { xs: "100%", md: "40%" },
          mt: 12,
        }}
      />
    </Box>
  );
}
export default Header;

function Tubelight({ reverse = false }: { reverse?: boolean }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        transform: reverse ? "scaleX(-1)" : undefined,
        background: `conic-gradient(
              from 90deg at 60px 0%,
              ${lighten(theme.palette.primary.main, 0.85)} 105deg,
              transparent 125deg
            )`,
      }}
    />
  );
}
