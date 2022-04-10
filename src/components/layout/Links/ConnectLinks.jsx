// import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const ConnectLinks = () => {
  return (
    <>
      <Box
        sx={{
          mr: 0,
          ml: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "whitesmoke",
        }}
      >
        {/* <Link href="/contact" passHref>
          <Typography variant="subtitle2" color="whitesmoke">
            Contact
          </Typography>
        </Link> */}
        <Button
          href="https://github.com/thomas-white-ucf"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Box>
      <Box
        sx={{
          mr: 0,
          ml: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "whitesmoke",
        }}
      >
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
