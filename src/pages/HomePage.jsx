import { Grid, Typography, Box, Paper } from "@mui/material";
import thomasLogo from "../assets/images/thomasLogo.jpeg";
//
// import AddTaskIcon from "@mui/icons-material/AddTask";
// import BodyGSAP from "./BodyGSAP";

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          overFlow: "auto",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            // p: 1,
            m: 1,
            mx: "auto",
            borderRadius: 1,
            // outline: 2,
            // backgroundColor: "#556cd6",
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            width: "225px",
          }}
        >
          <Box>
            {/* <AddTaskIcon /> */}
            <img
              src={thomasLogo}
              alt="Thomas White"
              // height="200px"
              width="200px"
            />
            {/* <BodyGSAP overFlow="hidden" /> */}
          </Box>
        </Paper>
        <Box
          sx={{
            alignContent: "center",
            borderRadius: 1,
            // background: "whitesmoke",
            mt: 2,
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
