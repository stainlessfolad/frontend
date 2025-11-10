import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";

interface FooterLink {
  title: string;
  path: string;
}

const quickLinks: FooterLink[] = [
  { title: "محصولات", path: "/products" },
  { title: "قیمت گذاری", path: "/pricing" },
  { title: "تماس با ما", path: "/contact-us" },
  { title: "درباره ما", path: "/about" },
];

const productLinks: FooterLink[] = [
  { title: "ورق استیل", path: "/products/sheet" },
  { title: "لوله استیل", path: "/products/pipe" },
  { title: "میلگرد استیل", path: "/products/rebar" },
  { title: "نبشی استیل", path: "/products/angle" },
];

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  // Contact details
  const phoneDisplay = "09131909290";
  const phoneHref = "+989131909290"; // International format for better compatibility
  const emailAddress = "info@steelbabak.ir";
  const addressText = "تهران، جاده قدیم قم، انبار فرد حسینی";
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressText
  )}`;

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: "white",
        pt: 6,
        pb: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {/* Company Info Section */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              بازرگانی استیل بابک
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              تأمین‌کننده معتبر ورق، لوله و پروفیل استیل با کیفیت برتر و قیمت
              مناسب در سراسر کشور
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              دسترسی سریع
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{
                    display: "block",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "translateX(-5px)",
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Products Section */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              محصولات
            </Typography>
            <Stack spacing={1}>
              {productLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{
                    display: "block",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "translateX(-5px)",
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contact Info Section */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              تماس با ما
            </Typography>
            <Stack spacing={1.5}>
              {/* Phone - opens dialer */}
              <Link
                href={`tel:${phoneHref}`}
                color="inherit"
                underline="hover"
                aria-label="شماره تماس"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Phone fontSize="small" />
                <Typography variant="body2" dir="ltr">
                  {phoneDisplay}
                </Typography>
              </Link>

              {/* Email - opens default mail app */}
              <Link
                href={`mailto:${emailAddress}`}
                color="inherit"
                underline="hover"
                aria-label="ارسال ایمیل"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Email fontSize="small" />
                <Typography variant="body2" dir="ltr">
                  {emailAddress}
                </Typography>
              </Link>

              {/* Address - opens Google Maps */}
              <Link
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
                aria-label="مشاهده آدرس روی نقشه"
                sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
              >
                <LocationOn fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  {addressText}
                </Typography>
              </Link>
            </Stack>

            {/* Social Media Icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton
                onClick={() =>
                  window.open("https://www.instagram.com/steel_babak/")
                }
                color="inherit"
                aria-label="Instagram"
                sx={{
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s",
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                onClick={() => window.open("https://wa.me/+989131909290")}
                color="inherit"
                aria-label="WhatsApp"
                sx={{
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s",
                }}
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 3, bgcolor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} بازرگانی استیل بابک. تمامی حقوق محفوظ است.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
