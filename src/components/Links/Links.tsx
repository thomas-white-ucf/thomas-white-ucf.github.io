import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
// =

const Links = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mx: 4 }}>
      <Link to={"/"}>
        <Box
          sx={{
            ml: 0,
            mr: "auto",
            px: 1,
            border: 2,
            borderRadius: 2,
            backgroundColor: "#151a22",
            color: "whitesmoke",
          }}
        >
          <Typography>Home</Typography>
        </Box>
      </Link>
      <Link to={"/portfolio"}>
        <Box
          sx={{
            // mr: "auto",
            px: 1,
            border: 2,
            borderRadius: 2,
            backgroundColor: "#151a22",
            color: "whitesmoke",
          }}
        >
          <Typography>Portfolio</Typography>
        </Box>
      </Link>
      <Link to={"/resume"}>
        <Box
          sx={{
            mr: "auto",
            px: 1,
            border: 2,
            borderRadius: 2,
            backgroundColor: "#151a22",
            color: "whitesmoke",
          }}
        >
          <Typography>Resume</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Links;
