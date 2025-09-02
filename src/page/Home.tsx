import { useState, useEffect } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  alpha,
  Card,
  CardContent,
  darken,
  Button,
  lighten,
  useTheme,
  Icon,
} from "@mui/material";
import { AttachMoney, ReceiptLong, LocalShipping } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getProducts } from "../service/api";
import type Product from "../model/product";
import type { SteelUsecaseInterface } from "../model/steel_usecase_interface";
import { steelUsecase } from "../model/steel_usecase";

function HomePage() {
  // Fetch Products
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((products: Product[]) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      {/* SEO */}
      <meta
        name="description"
        content="خرید و قیمت انواع استیل با بهترین قیمت بازار از معتبرترین مرکز فروش استیل در ایران با گواهی تیسکو"
      />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link rel="canonical" href="https://stainlessfolad.ir/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="بازرگانی آقامحمدحسنی - واردات مستقیم و خرید ورق و رول استیل ضذ زنگ"
      />
      <meta
        property="og:description"
        content="خرید و قیمت انواع استیل با بهترین قیمت بازار از معتبرترین مرکز فروش استیل در ایران با گواهی تیسکو"
      />
      <meta property="og:url" content="https://stainlessfolad.ir/" />
      <meta property="og:site_name" content="بازرگانی آقامحمدحسنی" />
      <meta property="og:updated_time" content="2025-08-20T10:25:23+03:30" />
      <meta
        property="article:published_time"
        content="2021-09-06T16:50:39+00:00"
      />
      <meta
        property="article:modified_time"
        content="2025-08-20T10:25:23+00:00"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="بازرگانی آقامحمدحسنی - واردات مستقیم و خرید ورق و رول استیل ضذ زنگ"
      />
      <meta
        name="twitter:description"
        content="خرید و قیمت انواع استیل با بهترین قیمت بازار از معتبرترین مرکز فروش استیل در ایران با گواهی تیسکو"
      />

      {/* BODY */}
      <Header />
      {/* Product Use Case Section */}
      <ProductUsecase />
      {/* Product Carousel Section */}
      <ProductCarousel products={products} />
      {/* Shop Benefits Section */}
      <ShopBenefits />
    </>
  );
}
export default HomePage;

// Headline Component
function Headline({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Stack
      component="div"
      sx={{
        marginY: 5,
        alignItems: "center",
        maxWidth: { xs: "100%", sm: "80%" },
        marginX: "auto",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

// Header Component
function Header() {
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

// Product Usecase Component
function ProductUsecase() {
  return (
    <Container sx={{ marginY: 12 }}>
      <Headline
        title="کاربرد گسترده ورق استیل"
        description="ورق استنلس استیل نوعی ورق فولادی مقاوم است که از ترکیب آهن با عناصری چون
        کربن و کروم ساخته می‌شود. این ورق‌ها علاوه بر شکل‌پذیری و قابلیت
        جوشکاری، مقاومت بالایی در برابر دماهای بسیار بالا و پایین (از ۲۰۰- تا
        ۱۰۰۰+ درجه سانتی‌گراد) دارند. همین ویژگی‌ها باعث شده ورق استیل به
        گزینه‌ای پرکاربرد در صنایع مختلف تبدیل شود."
      />
      <Grid container spacing={3} columns={4}>
        {steelUsecase.map((item: SteelUsecaseInterface, index: number) => (
          <Grid size={{ xs: 4, md: 2, lg: item.cta ? 2 : 1 }} key={index}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                // TODO: Use this later
                // background: `radial-gradient(circle at 0%, ${color} , transparent 30%)`,
                backgroundColor: alpha(darken(item.color, 0.1), 0.1),
                display: "flex",
                height: "12rem",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  marginY: "auto",
                  marginLeft: 2,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={item.color}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
              </CardContent>
              {item.cta && (
                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    display: { xs: "none", md: "flex" },
                    height: "100%",
                    // width: "14rem",
                    objectFit: "cover",
                    // right: "4rem",
                    WebkitMask:
                      "linear-gradient(to right, #000 75%, transparent)",
                  }}
                  src={item.image}
                  alt={item.title}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// Product Carousel Component
function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Container sx={{ marginY: 12 }}>
      <Headline
        title="جدیدترین محصولات استیل"
        description="استیل بابک یکی از معتبرترین مراکز خرید آنلاین محصولات استیل در ایران است. این مجموعه
        همواره تلاش می‌کند محصولات باکیفیت و استاندارد را با قیمت رقابتی در اختیار مشتریان قرار دهد.
        تنوع بالای محصولات، تضمین اصالت کالا و رعایت حقوق خریداران از مهم‌ترین اصول استیل بابک است. اگر به دنبال خرید ورق استیل مقاوم،
        کویل استیل ضدزنگ یا سایر محصولات استنلس استیل هستید، استیل بابک انتخابی مطمئن برای صنایع و پروژه‌های مختلف خواهد بود."
      />
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: 4,
                boxShadow: 4,
                mx: 1,
                mb: 5,
              }}
            >
              <Box
                component="img"
                src={`https://stainlessfolad.ir${product.picture}`} // TODO: Fix path in backend
                alt={product.name}
                sx={{
                  borderRadius: 4,
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                }}
              />
              <Stack direction="row" sx={{ height: 70, alignItems: "center" }}>
                {/* Product Name & Details */}
                <Stack spacing={1} flexGrow="1" alignItems="center">
                  <Typography variant="h6" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </Stack>

                {/* Dimensions */}
                <Stack spacing={1} flexGrow="1" alignItems="center">
                  <Stack direction="row" spacing={1}>
                    <Typography variant="caption" display="block">
                      ابعاد:
                    </Typography>
                    <Typography variant="caption" display="block" dir="ltr">
                      {product.dim.at(0)?.toString()}
                      {" × "}
                      {product.dim.at(1) == 0
                        ? "Coil"
                        : product.dim.at(1)?.toString()}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      ضخامت:
                    </Typography>
                    <Typography variant="caption" display="block" dir="ltr">
                      {product.thickness} mm
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

function ShopBenefits() {
  function BenefitCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <Grid direction="column" size={{ xs: 12, md: 4 }} sx={{ mx: "auto" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pb: 1,
          }}
        >
          <Icon sx={{ color: "secondary.dark", mr: 1 }}>{icon}</Icon>
          <Typography variant="h5" color="text.main">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Grid>
    );
  }
  return (
    <Container sx={{ marginY: 12 }}>
      <Typography variant="h4" fontWeight="bold" paddingBottom={3}>
        مزایای خرید از استیل بابک
      </Typography>

      <Grid container direction={{ xs: "column", sm: "row" }} spacing={4}>
        <BenefitCard
          icon={<AttachMoney />}
          title="قیمت رقابتی و خرید مستقیم"
          description="استیل بابک با واردات مستقیم انواع ورق استیل و کویل استنلس استیل، محصولات خود را بدون واسطه و با قیمت کاملاً رقابتی در اختیار مشتریان قرار می‌دهد. این یعنی شما می‌توانید با هزینه کمتر، بهترین کیفیت را دریافت کنید و خریدی مطمئن و اقتصادی داشته باشید."
        />
        <BenefitCard
          icon={<ReceiptLong />}
          title="تضمین کیفیت و اصالت کالا"
          description="تمامی محصولات ارائه‌شده توسط استیل بابک دارای گواهی اصالت و مطابق با استانداردهای جهانی هستند. ورق‌ها و کویل‌های استیل این مجموعه مقاومت بالا، دوام طولانی و کیفیت تضمین‌شده دارند تا خیال مشتریان از نظر استحکام و کارایی راحت باشد."
        />
        <BenefitCard
          icon={<LocalShipping />}
          title="ارسال سریع و پشتیبانی تخصصی"
          description="یکی از بزرگ‌ترین مزایای خرید از استیل بابک، سرعت در آماده‌سازی و ارسال سفارش به سراسر کشور است. علاوه بر این، تیم پشتیبانی متخصص آماده پاسخگویی به سوالات و ارائه مشاوره برای انتخاب بهترین نوع ورق یا کویل استیل بر اساس نیاز پروژه شما است."
        />
      </Grid>
    </Container>
  );
}
