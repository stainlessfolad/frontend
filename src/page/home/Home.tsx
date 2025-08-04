import { Box, Typography, Grid } from "@mui/material";
import Header from "./Header";
import ProductSlideshow from "./ProductSlideshow";
import UsecaseCard from "../../components/UsecaseCard";

import type { SteelUsecaseInterface } from "../../model/steel_usecase_interface";
import { steelUsecase } from "../../model/steel_usecase";

function HomePage() {
  return (
    <>
      <Header />
      <ProductUsecase />
      <ProductSlideshow />
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
