import { Box, Container, Stack, Typography } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";

const contentData = [
  {
    title: "Enhanced Collaboration",
    description:
      "The project fosters improved teamwork through shared resources and communication tools, enabling team members to collaborate effectively, regardless of their location.",
  },
  {
    title: "Streamlined Processes",
    description:
      "By automating repetitive tasks and integrating efficient workflows, the project minimizes manual intervention, leading to faster execution and reduced chances of errors.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leveraging analytics and performance metrics allows the team to make informed decisions, optimizing resource allocation and identifying areas for improvement to enhance overall productivity.",
  },
];

export const HomeCta = () => (
  <Box
    sx={{
      backgroundColor: "neutral.800",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      color: "neutral.100",
      py: "120px",
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ paddingBottom: 8 }}
      >
        <PieChartIcon sx={{ fontSize: 50 }} />
        <Typography align="left" color="inherit" variant="h2">
          Start saving time today!
        </Typography>
      </Stack>
      <Stack
        spacing={4}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Stack spacing={2} sx={{ flex: 1 }}>
          {contentData.map((item, index) => (
            <Box
              sx={{
                borderWidth: 1,
                borderRadius: 2,
                borderColor: "#5b7aa0",
                borderStyle: "solid",
                padding: 2,
              }}
              key={index}
            >
              <Typography align="left" color="inherit" variant="h5">
                {item.title}
              </Typography>
              <Typography align="left" color="inherit" variant="body1">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box
          component="img"
          src="/assets/productivity.jpg"
          alt="Productivity Illustration"
          sx={{ width: { xs: "100%", md: "50%" }, borderRadius: 2 }}
        />
      </Stack>
    </Container>
  </Box>
);
