import {
  Box,
  Stack,
  Typography,
  Button,
  Chip,
  useTheme,
  lighten,
} from "@mui/material";
import HeroImg from "/images/header_rolled_steel_and_sheets.webp";

const stats = [
  { value: "30+", label: "سفارشات تحویل داده شده" },
  { value: "48H", label: "میانگین زمان ارسال" },
  { value: "سرتاسر ایران", label: "پوشش شبکه حمل" },
];

const highlights = [
  "تائیدیه تیسکو و گواهی فنی هر سفارش",
  "منطبق با قیمت‌های جهانی فولاد",
  "عرضه بدون واسطه و تامین سریع",
];

function Hero() {
  const theme = useTheme();
  const accent = lighten(theme.palette.primary.main, 0.35);

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: `linear-gradient(175deg, ${theme.palette.primary.dark} 20% 80%, ${accent});`,
        color: theme.palette.primary.contrastText,
        px: { xs: 4, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 20% 20%, ${accent}, transparent 25%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 35%)`,
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="stretch"
        spacing={{ xs: 6, md: 4 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Stack
          spacing={4}
          width={{ xs: "100%", md: "55%" }}
          sx={{
            "@keyframes headlineFade": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
            }}
          >
            گره‌گشای صنایع فلزی
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3.8rem" },
              lineHeight: 1.2,
              fontWeight: 700,
              opacity: 0,
              animation: "headlineFade 0.9s ease forwards",
              animationDelay: "0.3s",
            }}
          >
            تامین تخصصی انواع استیل با گواهی تیسکو و تضمین کیفیت
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.92)",
              fontSize: { xs: "0.85rem", md: "1.3rem" },
              lineHeight: 1.8,
              opacity: 0,
              animation: "headlineFade 0.9s ease forwards",
              animationDelay: "0.45s",
            }}
          >
            بازرگانی استیل بابک با تجربه‌ای درخشان، به عنوان یک شریک تجاری قابل
            اعتماد در صنعت فولاد و استیل شناخته می‌شود. ما با دسترسی مستقیم به
            محصولات کارخانه‌های برتر تولیدکننده ورق استیل، متعهد به تأمین سریع و
            مطمئن کلیه محصولات تخصصی مورد نیاز شما هستیم.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                px: { xs: 3.5, sm: 4 },
                py: { xs: 1.1, sm: 1.3 },
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              درخواست قیمت سریع
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                borderColor: "rgba(255,255,255,0.7)",
                color: "#fff",
                px: { xs: 3.5, sm: 4 },
                py: { xs: 1.1, sm: 1.3 },
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              برنامه‌ریزی بازدید انبار
            </Button>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 2 }}
            flexWrap="wrap"
            sx={{
              justifyContent: { xs: "center", sm: "flex-start" },
              "@keyframes highlightGlow": {
                "0%": { transform: "translateY(20px)", opacity: 0 },
                "60%": { transform: "translateY(0)", opacity: 1 },
                "100%": { transform: "translateY(0)", opacity: 0.85 },
              },
            }}
          >
            {highlights.map((item, index) => (
              <Chip
                key={item}
                label={item}
                variant="filled"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: "highlightGlow 1.3s ease forwards",
                  animationDelay: `${0.3 + index * 0.15}s`,
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack
          width={{ xs: "100%", md: "40%" }}
          alignItems="center"
          sx={{ gap: 3 }}
        >
          <Box
            component="img"
            src={HeroImg}
            alt="Rolled Steel and Sheets"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          />

          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 3,
              p: 2,
              "@keyframes statRise": {
                "0%": { transform: "translateY(20px)", opacity: 0 },
                "60%": { transform: "translateY(0)", opacity: 1 },
                "100%": { transform: "translateY(0)", opacity: 0.9 },
              },
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                sx={{
                  textAlign: "center",
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: "statRise 0.9s ease forwards",
                  animationDelay: `${0.3 + index * 0.15}s`,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  lineHeight={1}
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "2.1rem" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Hero;
