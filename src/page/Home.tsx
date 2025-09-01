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
} from "@mui/material";

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
    </>
  );
}
export default HomePage;

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
        src="/images/header_rolled_steel_and_sheets.webp"
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

function ProductUsecase() {
  return (
    <Box sx={{ marginX: 4, marginY: 12 }}>
      <Typography
        variant="h4"
        sx={{ marginY: 6, textAlign: "center", fontWeight: "bold" }}
      >
        کاربرد گسترده ورق استیل
      </Typography>

      <Grid container spacing={3} columns={4}>
        {steelUsecase.map((item: SteelUsecaseInterface, index: number) => (
          <Grid size={{ sm: 4, md: 2, lg: item.cta ? 2 : 1 }} key={index}>
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
                    display: "flex",
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
    </Box>
  );
}

function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        sx={{ marginY: 6, textAlign: "center", fontWeight: "bold" }}
      >
        جدیدترین محصولات استیل
      </Typography>
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
