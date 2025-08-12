import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "./Header";
import UsecaseCard from "../../components/UsecaseCard";
import type { SteelUsecaseInterface } from "../../model/steel_usecase_interface";
import { steelUsecase } from "../../model/steel_usecase";
import { useState, useEffect } from "react";
import type Product from "../../model/product";
import { getProducts } from "../../service/api";

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
      <Header />
      <ProductUsecase />

      {/* Product Carousel Slider */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" textAlign="center" marginBottom={4}>
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
                <Stack
                  direction="row"
                  sx={{ height: 70, alignItems: "center" }}
                >
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
    </>
  );
}
export default HomePage;

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
            <UsecaseCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
