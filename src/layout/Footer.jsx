import { Box, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          // borderColor: "#fff",
          border: 1,
          mt: "auto",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {/* <Box sx={{ pt: 1, backgroundColor: "whitesmoke", opacity: 1 }}>
          <Divider />
        </Box> */}
        {/* <Typography variant="body2"> */}
        <Link color="#fff" href="mailto:thomas.white.ucf@gmail.com">
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
