import { Grid, Typography, Box } from "@mui/material";
import React from "react";

import newResume from "../../assets/images/resume-3-28-22.png";
import oldResume from "../../assets/images/resume.png";

const ResumePage = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4">Resume</Typography>
      <Box
        sx={{
          alignContent: "center",
          // ml: "auto",
          // border: 1,
          // borderRadius: 1,
          // background: "black",
          // mx: "auto",
        }}
      >
        <img
          src={newResume}
          alt="newResume-Thomas"
          height="100%"
          width="100%"
        />

        <Typography variant="h6" mt={4}>
          Previous -Engineering Resume
        </Typography>

        <img
          src={oldResume}
          alt="oldResume-Thomas"
          height="100%"
          width="100%"
        />
      </Box>
    </Grid>
  );
};

export default ResumePage;
