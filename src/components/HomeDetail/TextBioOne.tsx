// import React from 'react'
import { Box, Typography } from "@mui/material";

const TextBioOne = () => {
  return (
    <Box
      sx={{
        alignContent: "center",
        borderRadius: 1,
        // background: "whitesmoke",
        mt: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Thomas White
      </Typography>
      <Typography variant="h6" gutterBottom>
        MERN Full Stack Developer
      </Typography>
      <hr />
      <Typography variant="h5" gutterBottom>
        After graduating from UCF Mechanical Engineering in 2015, I performed
        Facility Condition Assessments and constructed Cost Estimates with
        Nelson Engineering Company. October 2017, I started contracting
        independently and thereafter founded my consulting company White
        Engineering LLC in 2018.
      </Typography>
      <hr />
      <Typography variant="h5" gutterBottom>
        While assisting Professional Estimators as White Engineering's Owner and
        sole employee, I returned to the University of Central Florida to attend
        the Full Stack Web Development Bootcamp.
      </Typography>
      <hr />
      <Typography variant="h5" gutterBottom>
        After 2193.1 miles in 2021, I completed an Appalachian Trail
        through-hike. <br />
        Also, I have enjoyed traveling to ~44 States, The Bahamas, Mexico,
        Puerto Rico, U.S. Virgin Islands, Peru, Germany and Japan.
      </Typography>
    </Box>
  );
};

export default TextBioOne;
