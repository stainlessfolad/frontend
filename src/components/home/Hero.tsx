import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  lighten,
} from "@mui/material";

function Hero() {
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
        px: { xs: 4, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "backgroundMove 20s linear infinite",
          "@keyframes backgroundMove": {
            "0%": { transform: "translate(0, 0)" },
            "100%": { transform: "translate(50px, 50px)" },
          },
        }}
      />

      {/* Content Side */}
      <Stack
        width={{ xs: "100%", md: "40%" }}
        alignItems="flex-end"
        sx={{
          zIndex: 1,
          animation: "fadeInUp 1s ease-out",
          "@keyframes fadeInUp": {
            from: {
              opacity: 0,
              transform: "translateY(30px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
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
            WebkitMask: "linear-gradient(rgba(0, 0, 0, 0.4), transparent)",
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
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            گروه بازرگانی استیل
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "grey.400",
              lineHeight: 1.8,
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
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            borderRadius: 50,
            fontSize: "1.1rem",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: 6,
            },
          }}
        >
          اطلاعات بیشتر
        </Button>
      </Stack>

      {/* Picture Side */}
      <Box
        component="img"
        src="/images/header_rolled_steel_and_sheets.webp"
        alt="Rolled Steel and Sheets"
        sx={{
          objectFit: "cover",
          minHeight: { xs: "200px" },
          width: { xs: "100%", md: "40%" },
          mt: 12,
          borderRadius: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          transition: "transform 0.5s ease",
          animation: "fadeInRight 1s ease-out 0.3s backwards",
          "@keyframes fadeInRight": {
            from: {
              opacity: 0,
              transform: "translateX(50px)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      />
    </Box>
  );
}

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

export default Hero;
