import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  alpha,
  darken,
} from "@mui/material";
import type { SteelUsecaseInterface } from "../../model/steel_usecase_interface";
import { steelUsecase } from "../../model/steel_usecase";
import Headline from "./Headline";
import useScrollReveal from "../../hooks/useScrollReveal";

function ProductUsecaseSection() {
  const { elementRef, isVisible } = useScrollReveal({ threshold: 0.1 });

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
      <Grid container spacing={3} columns={4} ref={elementRef}>
        {steelUsecase.map((item: SteelUsecaseInterface, index: number) => (
          <Grid size={{ xs: 4, md: 2, lg: item.cta ? 2 : 1 }} key={index}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                backgroundColor: alpha(darken(item.color, 0.1), 0.08),
                border: `1px solid ${alpha(item.color, 0.2)}`,
                display: "flex",
                height: "12rem",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
                  index * 0.1
                }s`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${alpha(
                    item.color,
                    0.1
                  )} 0%, transparent 60%)`,
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                },
                "&:hover": {
                  transform: isVisible
                    ? "translateY(-8px)"
                    : "translateY(30px)",
                  boxShadow: `0 12px 24px ${alpha(item.color, 0.25)}`,
                  borderColor: alpha(item.color, 0.4),
                  "&::before": {
                    opacity: 1,
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  marginY: "auto",
                  marginLeft: 2,
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={item.color}
                  gutterBottom
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateX(-5px)",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              {item.cta && (
                <Box
                  component="img"
                  sx={{
                    position: "relative",
                    display: { xs: "none", md: "flex" },
                    height: "100%",
                    objectFit: "cover",
                    WebkitMask:
                      "linear-gradient(to right, #000 75%, transparent)",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
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

export default ProductUsecaseSection;
