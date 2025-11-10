import { Container, Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type Product from "../../model/product";
import Headline from "./Headline";

interface ProductCarouselSectionProps {
  products: Product[];
}

function ProductCarouselSection({ products }: ProductCarouselSectionProps) {
  return (
    <Container
      sx={{
        marginY: 12,
        overflow: "hidden",
      }}
    >
      <Headline
        title="جدیدترین محصولات استیل"
        description="استیل بابک یکی از معتبرترین مراکز خرید آنلاین محصولات استیل در ایران است. این مجموعه
        همواره تلاش می‌کند محصولات باکیفیت و استاندارد را با قیمت رقابتی در اختیار مشتریان قرار دهد.
        تنوع بالای محصولات، تضمین اصالت کالا و رعایت حقوق خریداران از مهم‌ترین اصول استیل بابک است. اگر به دنبال خرید ورق استیل مقاوم،
        کویل استیل ضدزنگ یا سایر محصولات استنلس استیل هستید، استیل بابک انتخابی مطمئن برای صنایع و پروژه‌های مختلف خواهد بود."
      />
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={40}
        style={{
          padding: 30,
          overflow: "visible",
        }}
      >
        {products.map((product: Product) => (
          <SwiperSlide
            key={product.id}
            style={{ width: "100%", transition: "all 0.4s ease" }}
          >
            {({ isActive }) => (
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: 4,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  mx: 1,
                  mb: 5,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: isActive ? 1 : 0,
                  filter: isActive ? "none" : "blur(20px)",
                  pointerEvents: isActive ? "auto" : "none",
                  "&:hover": {
                    transform: isActive ? "translateY(-8px)" : "none",
                    boxShadow: isActive
                      ? "0 16px 48px rgba(0,0,0,0.18)"
                      : "0 8px 32px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                    },
                    "&:hover::after": {
                      opacity: 1,
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={`https://steelbabak.ir${product.picture}`}
                    alt={product.name}
                    sx={{
                      borderRadius: 4,
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </Box>
                <Stack
                  direction="row"
                  sx={{
                    minHeight: 90,
                    alignItems: "center",
                    bgcolor: "background.paper",
                    px: 2,
                    py: 2,
                  }}
                >
                  {/* Product Name & Details */}
                  <Stack spacing={1} flexGrow="1" alignItems="center">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        background: "linear-gradient(135deg, #1E55B3, #1a7975)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </Stack>

                  {/* Dimensions */}
                  <Stack
                    spacing={1}
                    flexGrow="1"
                    alignItems="center"
                    sx={{
                      borderRight: "2px solid",
                      borderColor: "divider",
                      pr: 2,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="caption" fontWeight="bold">
                        ابعاد:
                      </Typography>
                      <Typography
                        variant="caption"
                        dir="ltr"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {product.dim.at(0)?.toString()}
                        {" × "}
                        {product.dim.at(1) == 0
                          ? "Coil"
                          : product.dim.at(1)?.toString()}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="caption" fontWeight="bold">
                        ضخامت:
                      </Typography>
                      <Typography
                        variant="caption"
                        dir="ltr"
                        sx={{
                          bgcolor: "secondary.main",
                          color: "white",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {product.thickness} mm
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default ProductCarouselSection;
