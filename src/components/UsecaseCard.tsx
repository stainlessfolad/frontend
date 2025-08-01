import {
  Card,
  CardContent,
  Typography,
  Box,
  alpha,
  darken,
} from "@mui/material";
import { type SteelUsecaseInterface } from "../model/steel_usecase_interface";

function UsecaseCard({
  title,
  description,
  image,
  color,
  cta = false,
}: SteelUsecaseInterface) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        // TODO: Use this later
        // background: `radial-gradient(circle at 0%, ${color} , transparent 30%)`,
        backgroundColor: alpha(darken(color, 0.1), 0.1),
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
        <Typography variant="h5" fontWeight="bold" color={color} gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </CardContent>
      {cta && (
        <Box
          component="img"
          sx={{
            position: "relative",
            display: "flex",
            height: "100%",
            // width: "14rem",
            objectFit: "cover",
            // right: "4rem",

            WebkitMask: "linear-gradient(to right, #000 75%, transparent)",
          }}
          src={image}
          alt={title}
        />
      )}
    </Card>
  );
}

export default UsecaseCard;
