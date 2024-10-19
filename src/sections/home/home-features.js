import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import LinkExternal01Icon from "@untitled-ui/icons-react/build/esm/LinkExternal01";

import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

// Sample services data
const services = [
  {
    title: "Web Development",
    description:
      "We create responsive and dynamic websites tailored to your business needs, ensuring a seamless user experience across all devices.",
    image: "https://placehold.co/600x400?text=placehold",
  },
  {
    title: "Mobile App Development",
    description:
      "Our team develops cutting-edge mobile applications for iOS and Android platforms, helping you reach your audience on the go.",
    image: "https://placehold.co/600x400?text=placehold",
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide scalable and secure cloud infrastructure solutions to help your business grow and adapt to changing demands.",
    image: "https://placehold.co/600x400?text=placehold",
  },
  {
    title: "AI Integration",
    description:
      "Leverage the power of artificial intelligence to optimize your business processes and gain valuable insights from your data.",
    image: "https://placehold.co/600x400?text=placehold",
  },
];

export const HomeFeatures = () => {
  const theme = useTheme();
  // const [activeFeature, setActiveFeature] = useState(0);
  // const feature = features[activeFeature];
  // const image =
  //   theme.palette.mode === "dark" ? feature?.imageDark : feature?.imageLight;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 6 }}
      >
        Our Services
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {services.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={service.title}
            sx={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
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
                  height="250"
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
