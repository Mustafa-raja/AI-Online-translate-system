import NextLink from "next/link";
import EyeIcon from "@untitled-ui/icons-react/build/esm/Eye";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { paths } from "../../paths";

export const HomeHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "neutral.800",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        color: "common.white",
        py: "120px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box maxWidth="sm">
              <Typography variant="h1" sx={{ mb: 2 }}>
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #b300b8, #D5006D, #b300b8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                  }}
                >
                  UX is our Expertise,
                </span>
                <span style={{ color: "#1756fe" }}>
                  {" "}
                  you focus on Developing.
                </span>
              </Typography>
              <Typography
                color="white"
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                A professional kit that comes with ready-to-use MUI components
                developed with one common goal in mind, help you build faster &
                beautiful applications.
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={1}
                sx={{ my: 3 }}
              >
                <Rating readOnly value={4.7} precision={0.1} max={5} />
                <Typography
                  color="text.white"
                  variant="caption"
                  sx={{ fontWeight: 700 }}
                >
                  4.7/5
                </Typography>
                <Typography color="text.secondary" variant="caption">
                  based on (70+ reviews)
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Button
                  component={NextLink}
                  href={paths.dashboard.index}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <EyeIcon />
                    </SvgIcon>
                  }
                  sx={(theme) =>
                    theme.palette.mode === "dark"
                      ? {
                          backgroundColor: "neutral.50",
                          color: "neutral.900",
                          "&:hover": {
                            backgroundColor: "neutral.200",
                          },
                        }
                      : {
                          backgroundColor: "neutral.900",
                          color: "neutral.50",
                          "&:hover": {
                            backgroundColor: "neutral.700",
                          },
                        }
                  }
                  variant="contained"
                >
                  Live Demo
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/hero.webp" 
              alt="Hero image" 
              sx={{
                width: "90%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
