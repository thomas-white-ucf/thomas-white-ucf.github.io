import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {/* <Typography variant="body2"> */}
        <Link color="inherit" href="mailto:thomas.white.ucf@gmail.com">
          <Typography href="mailto:thomas.white.ucf@gmail.com">
            Thomas.white.ucf@gmail.com
          </Typography>{" "}
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </Link>{" "}
        {/* </Typography> */}
      </Box>
    </>
  );
};

export default Footer;
