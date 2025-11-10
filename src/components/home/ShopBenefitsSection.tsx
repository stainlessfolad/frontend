import { Container, Grid, Box, Typography, Icon } from "@mui/material";
import { AttachMoney, ReceiptLong, LocalShipping } from "@mui/icons-material";
import useScrollReveal from "../../hooks/useScrollReveal";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

function BenefitCard({
  icon,
  title,
  description,
  index,
  isVisible,
}: BenefitCardProps) {
  return (
    <Grid
      direction="column"
      size={{ xs: 12, md: 4 }}
      sx={{
        mx: "auto",
        p: 3,
        borderRadius: 3,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
        "&:hover": {
          bgcolor: "background.paper",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          transform: isVisible ? "translateY(-5px)" : "translateY(40px)",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pb: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "rotate(10deg) scale(1.1)",
            },
          }}
        >
          <Icon>{icon}</Icon>
        </Box>
        <Typography variant="h6" fontWeight="bold" color="text.main">
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
        {description}
      </Typography>
    </Grid>
  );
}

function ShopBenefitsSection() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <Container sx={{ marginY: 12 }} ref={elementRef}>
      <Typography
        variant="h4"
        fontWeight="bold"
        paddingBottom={5}
        sx={{
          position: "relative",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-30px)",
          transition: "all 0.6s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 16,
            right: 0,
            width: "80px",
            height: "4px",
            bgcolor: "secondary.main",
            borderRadius: "2px",
          },
        }}
      >
        مزایای خرید از استیل بابک
      </Typography>

      <Grid container direction={{ xs: "column", sm: "row" }} spacing={4}>
        <BenefitCard
          icon={<AttachMoney />}
          title="قیمت رقابتی و خرید مستقیم"
          description="استیل بابک با واردات مستقیم انواع ورق استیل و کویل استنلس استیل، محصولات خود را بدون واسطه و با قیمت کاملاً رقابتی در اختیار مشتریان قرار می‌دهد. این یعنی شما می‌توانید با هزینه کمتر، بهترین کیفیت را دریافت کنید و خریدی مطمئن و اقتصادی داشته باشید."
          index={0}
          isVisible={isVisible}
        />
        <BenefitCard
          icon={<ReceiptLong />}
          title="تضمین کیفیت و اصالت کالا"
          description="تمامی محصولات ارائه‌شده توسط استیل بابک دارای گواهی اصالت و مطابق با استانداردهای جهانی هستند. ورق‌ها و کویل‌های استیل این مجموعه مقاومت بالا، دوام طولانی و کیفیت تضمین‌شده دارند تا خیال مشتریان از نظر استحکام و کارایی راحت باشد."
          index={1}
          isVisible={isVisible}
        />
        <BenefitCard
          icon={<LocalShipping />}
          title="ارسال سریع و پشتیبانی تخصصی"
          description="یکی از بزرگ‌ترین مزایای خرید از استیل بابک، سرعت در آماده‌سازی و ارسال سفارش به سراسر کشور است. علاوه بر این، تیم پشتیبانی متخصص آماده پاسخگویی به سوالات و ارائه مشاوره برای انتخاب بهترین نوع ورق یا کویل استیل بر اساس نیاز پروژه شما است."
          index={2}
          isVisible={isVisible}
        />
      </Grid>
    </Container>
  );
}

export default ShopBenefitsSection;
