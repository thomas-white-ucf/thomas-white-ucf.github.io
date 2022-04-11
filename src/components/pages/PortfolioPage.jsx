import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../layout/Cards/ProjectCard";

const PortfolioPage = () => {
  //

  return (
    <Grid item xs={12}>
      <Box>
        <Typography variant="h4">Projects</Typography>
        <ProjectCard />
      </Box>
    </Grid>
  );
};

export default PortfolioPage;
