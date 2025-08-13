import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Stack,
  Grid,
  useTheme,
  darken,
  Container,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Instagram,
  Chat,
  Telegram,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import type { ChangeEvent } from "react";
import { postMessage } from "../../service/api";
import type Message from "../../model/message";

function ContactUsPage() {
  const theme = useTheme();

  return (
    <Container sx={{ py: 12 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: theme.palette.secondary.main,
        }}
      >
        ارسال پیام
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mb={4}>
        سوالی دارید؟ برای سفارش و مشاوره با ما میتوانید فرم را تکمیل کنید!
      </Typography>

      <Box
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <ContactForm />
        <ContactInfo />
      </Box>
    </Container>
  );
}
export default ContactUsPage;

function ContactForm() {
  const validationSchema = yup.object({
    name: yup.string().required("الزامی"),
    phone: yup
      .string()
      .required("الزامی")
      .matches(/((0?9)|(\+?989))\d{9}/g, "شماره تماس معتبر نیست"),
    text: yup.string().required("الزامی"),
  });

  const formik = useFormik<Message>({
    initialValues: {
      name: "",
      phone: "",
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data: Message) => {
      try {
        const res = await postMessage(data);
        if (res) {
          alert("Message Sent");
        }
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        }
      }
    },
  });

  // Phone
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const persianNumbers: Record<string, string> = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    };
    let value = e.target.value;
    value = value.replace(/[۰-۹]/, (char) => persianNumbers[char]);

    value = value.replace(/[^0-9]/g, "");
    formik.setFieldValue("phone", value);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ flex: 1, p: 4, position: "relative" }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            id="name"
            name="name"
            label="نام و نام خانوادگی"
            fullWidth
            variant="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            id="phone"
            name="phone"
            label="شماره تماس"
            dir="ltr"
            inputMode="tel"
            placeholder="09123456789"
            fullWidth
            variant="standard"
            value={formik.values.phone}
            onChange={handlePhoneChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            id="text"
            name="text"
            label="متن پیام"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.text && Boolean(formik.errors.text)}
            helperText={formik.touched.text && formik.errors.text}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{
          position: "absolute",
          bottom: 20,
          px: 4,
          py: 1,
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        ارسال
      </Button>
    </Box>
  );
}

function ContactInfo() {
  const theme = useTheme();
  return (
    <Box
      component="div"
      sx={{
        bgcolor: darken(theme.palette.secondary.main, 0.2),
        color: "#fff",
        p: 4,
        width: { md: "40%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ gap: 5 }}>
        {/* section title */}
        <Stack>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            اطلاعات تماس
          </Typography>
          <Typography variant="body2">
            به صورت مستقیم با ما در ارتباط باشید
          </Typography>
        </Stack>
        {/* Contact Info */}
        <Stack gap={1.5}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Phone />
            <Typography style={{ direction: "ltr" }}>
              +98 913 190 9290
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <Email />
            <Typography style={{ direction: "ltr" }}>
              support@stainlessfolad.ir
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-start" gap={2}>
            <LocationOn />
            <Typography>تهران</Typography>
          </Stack>
        </Stack>
        {/* Extra Links */}
        <Stack direction="row" spacing={2}>
          <IconButton sx={{ color: "#fff" }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Telegram />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Chat />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
