import { Stack, Typography } from "@mui/material";

interface HeadlineProps {
  title: string;
  description?: string;
}

function Headline({ title, description }: HeadlineProps) {
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
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            bgcolor: "secondary.main",
            borderRadius: "2px",
          },
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mt: 3,
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}

export default Headline;
