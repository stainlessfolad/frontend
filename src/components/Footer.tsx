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
import { Phone, Email, Instagram, WhatsApp } from "@mui/icons-material";

const quickLinks = [
  { title: "محصولات", path: "/products" },
  { title: "قیمت گذاری", path: "/pricing" },
  { title: "تماس با ما", path: "/contact" },
  { title: "درباره ما", path: "/about" },
];

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const phoneDisplay = "09131909290";
  const phoneHref = "+989131909290";
  const emailAddress = "info@steelbabak.ir";

  return (
    <Box
      component="footer"
      itemScope
      itemType="http://schema.org/Organization"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 5, sm: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={4}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "start" }, maxWidth: 420 }}>
            <Typography
              variant="h6"
              component="h2"
              fontWeight={700}
              color="text.primary"
              gutterBottom
              itemProp="name"
            >
              بازرگانی استیل بابک
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
              itemProp="description"
            >
              تأمین‌کننده مطمئن ورق، لوله و پروفیل‌های استیل با تمرکز بر کیفیت و
              پشتیبانی حرفه‌ای
            </Typography>
          </Box>

          <Stack
            spacing={1.2}
            alignItems={{ xs: "center", sm: "flex-start" }}
            sx={{ textAlign: { xs: "center", sm: "start" } }}
          >
            <Typography
              variant="subtitle2"
              component="h3"
              fontWeight={600}
              color="text.primary"
            >
              دسترسی سریع
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              justifyContent="center"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  color="text.secondary"
                  underline="hover"
                  sx={{ fontSize: "0.875rem" }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={1.2} alignItems={{ xs: "center", sm: "flex-start" }}>
            <Typography
              variant="subtitle2"
              component="h3"
              fontWeight={600}
              color="text.primary"
            >
              تماس با ما
            </Typography>
            <Stack spacing={0.5} alignItems="flex-start">
              <Link
                href={`tel:${phoneHref}`}
                color="text.secondary"
                underline="hover"
                itemProp="telephone"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Phone fontSize="small" />
                <span dir="ltr" style={{ fontSize: "0.875rem" }}>
                  {phoneDisplay}
                </span>
              </Link>
              <Link
                href={`mailto:${emailAddress}`}
                color="text.secondary"
                underline="hover"
                itemProp="email"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Email fontSize="small" />
                <span dir="ltr" style={{ fontSize: "0.875rem" }}>
                  {emailAddress}
                </span>
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="center">
              <IconButton
                href="https://www.instagram.com/steel_babak/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="inherit"
                aria-label="Instagram"
                itemProp="sameAs"
                sx={{
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                href="https://wa.me/+989131909290"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="inherit"
                aria-label="WhatsApp"
                itemProp="sameAs"
                sx={{
                  border: 1,
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, borderColor: theme.palette.divider }} />

        <Typography variant="body2" color="text.secondary" textAlign="center">
          © {currentYear} بازرگانی استیل بابک. تمامی حقوق محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
