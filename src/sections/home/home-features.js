import { useTheme } from "@mui/material/styles";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import {
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  CardMedia,
  Box,
} from "@mui/material";

// Sample services data
const services = [
  {
    title: "Mobile App Development",
    description:
      "Our team develops cutting-edge mobile applications for iOS and Android platforms, helping you reach your audience on the go.",
    image: "/assets/placeholder2.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide scalable and secure cloud infrastructure solutions to help your business grow and adapt to changing demands.",
    image: "/assets/placeholder3.jpg",
  },
  {
    title: "AI Integration",
    description:
      "Leverage the power of artificial intelligence to optimize your business processes and gain valuable insights from your data.",
    image: "/assets/placeholder4.jpg",
  },
];

export const HomeFeatures = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingBottom={3}
      >
        <HomeRepairServiceIcon sx={{ fontSize: 50, color: "#1756fe" }} />
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          color="#1756fe"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: "row",
            mb: 6,
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                Web Development
              </Typography>
              <Typography variant="body1">
                We create responsive and dynamic websites tailored to your
                business needs, ensuring a seamless user experience across all
                devices.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="/assets/placeholder1.jpg"
                alt="Web Development"
              />
            </Card>
          </Grid>
        </Grid>
        {services.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={service.title}
            sx={{
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              mb: 6,
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={service.image}
                  alt={service.title}
                />
              </Card>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
};
