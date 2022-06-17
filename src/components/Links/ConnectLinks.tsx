// import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const ConnectLinks = () => {
  return (
    <>
      <Box
        sx={{
          p: 1,
          // mx: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          href="https://github.com/thomas-white-ucf"
          target="_blank"
          rel="noopener noreferrer"
          // sx={{ }}
        >
          GitHub
        </Button>
        {/* </Box> */}
        {/* <Box sx={{ p: 1 }}> */}
        <Button
          href="https://www.linkedin.com/in/thomas-white-engineering/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Box>
    </>
  );
};

export default ConnectLinks;
