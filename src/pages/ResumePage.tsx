import { Grid, Typography, Box, Divider } from "@mui/material";
import React from "react";

import newResume from "../assets/images/resume-3-28-22.png";
import oldResume from "../assets/images/resume.png";

const ResumePage = () => {
  return (
    <Grid item xs={12} sm={10} md={8} sx={{ mx: "auto" }}>
      <Typography variant="h6">Full Stack Resume</Typography>
      <Box my={1}>
        <Divider />
      </Box>

      <Box
      // sx={{
      //   alignContent: "center",
      // }}
      >
        <img src={newResume} alt="newResume-Thomas" width="100%" />

        <Typography variant="h6" mt={4}>
          Engineering Resume (2019)
        </Typography>

        <Box my={1}>
          <Divider />
        </Box>

        <img src={oldResume} alt="oldResume-Thomas" width="100%" />
      </Box>
    </Grid>
  );
};

export default ResumePage;
