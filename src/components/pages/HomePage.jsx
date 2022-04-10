import { Grid, Typography, Box } from "@mui/material";
import thomasLogo from "../../assets/images/thomasLogo.jpeg";

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          // display: "flex",
          // flexWrap: "wrap",
          overFlow: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: 1,
            m: 1,
            borderRadius: 2,
            border: 2,
            backgroundColor: "#556cd6",
            // maxWidth: "50%",
            // minWidth: "220px",
            // display: "flex",
            display: "inline-flex",
            // flexWrap: "wrap",
            // display: "block"
          }}
        >
          <img
            src={thomasLogo}
            alt="Thomas White"
            height="200px"
            width="200px"
          />
        </Box>
        <Box
          sx={{
            // display: "inline-flex",
            alignContent: "center",
            // ml: "auto",
            // border: 1,
            borderRadius: 1,
            background: "whitesmoke",
            // p: 1,
            // m: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#556cd6",
              color: "white",
              p: 2,
              m: 1,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Thomas White
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              MERN Full Stack Developer
            </Typography>
            <hr />
            <Typography variant="subtitle" gutterBottom>
              After graduating from UCF Mechanical Engineering in 2015, I
              performed Facility Condition Assessments and constructed Cost
              Estimates with Nelson Engineering Company. October 2017, I started
              contracting independently and thereafter founded my consulting
              company White Engineering LLC in 2018.
            </Typography>
            <hr />
            <Typography variant="subtitle" gutterBottom>
              While assisting Professional Estimators as White Engineering's
              Owner and sole employee, I returned to the University of Central
              Florida to attend the Full Stack Web Development Bootcamp.
            </Typography>
            <hr />
            <Typography variant="subtitle" gutterBottom>
              After 2193.1 miles in 2021, I completed an Appalachian Trail
              through-hike. <br />
              Also, I have enjoyed traveling to ~44 States, The Bahamas, Mexico,
              Puerto Rico, U.S. Virgin Islands, Peru, Germany and Japan.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomePage;
