import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  MobileStepper,
  Container,
  Stack,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import type Product from "../../model/product";
import { getProducts } from "../../service/api";

function ProductSlideshow({
  autoPlayInterval = 5000,
}: {
  autoPlayInterval?: number;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((products: Product[]) => {
      setProducts(products);
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (products.length <= 1) return;
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, autoPlayInterval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, products.length, autoPlayInterval]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  if (!products.length) {
    return <div>No products available.</div>;
  }

  const product = products[current];

  return (
    <Container sx={{ display: "flex" }}>
      <IconButton
        onClick={handlePrev}
        disabled={products.length <= 1}
        aria-label="Previous"
        size="large"
        sx={{ my: "auto", marginLeft: 4 }}
      >
        <KeyboardArrowRight />
      </IconButton>
      <Stack width="100%">
        <Typography variant="h4" textAlign="center" marginBottom={2}>
          کالا های موجود
        </Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "clip",
            borderRadius: 8,
            height: 300,
            aspectRatio: "16/9",
          }}
        >
          <img
            src={`https://stainlessfolad.ir${product.picture}`}
            alt={product.name}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <Stack
            component="div"
            sx={{
              position: "absolute",
              right: 15,
              bottom: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" style={{ stroke: "white" }} gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </Stack>
        </Box>
        <MobileStepper
          variant="dots"
          steps={products.length}
          position="static"
          activeStep={current}
          nextButton={null}
          backButton={null}
          sx={{ justifyContent: "center", mt: 2 }}
        />
      </Stack>
      <IconButton
        onClick={handleNext}
        disabled={products.length <= 1}
        aria-label="Next"
        size="large"
        sx={{ my: "auto", marginRight: 4 }}
      >
        <KeyboardArrowLeft />
      </IconButton>
    </Container>
  );
}
export default ProductSlideshow;
