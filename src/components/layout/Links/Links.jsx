import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// =

const Links = () => {
  return (
    <>
      <Box
        sx={{
          ml: 0,
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          backgroundColor: "whitesmoke",
        }}
      >
        <Link to={"/"}>Home</Link>

        {/* <Link href="/" passHref>
          <Typography variant="subtitle2" color="whitesmoke">
            Home
          </Typography>
        </Link> */}
      </Box>

      {/* <Box sx={{ mx: "auto", px: 1, border:1, backgroundColor: "whitesmoke" }}>
        <Link href="/Search" passHref>
          <Typography variant="subtitle2" color="whitesmoke">
            Search
          </Typography>
        </Link>
      </Box> */}
      <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          backgroundColor: "whitesmoke",
        }}
      >
        <Link to={"/portfolio"}>Portfolio</Link>

        {/* <Link href="/wallet" passHref>
          <Typography variant="subtitle2" color="whitesmoke">
            Wallet
          </Typography>
        </Link> */}
      </Box>
      <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          backgroundColor: "whitesmoke",
        }}
      >
        <Link to={"/resume"}>Resume</Link>
        {/* <Link href="/nftsPage" passHref>
          <Typography variant="subtitle2" color="whitesmoke">
            NFTs
          </Typography>
        </Link> */}
      </Box>
      {/* <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          backgroundColor: "whitesmoke",
        }}
      >
           <Link to={"/technologies"}>Technologies</Link>
        
      </Box> */}
    </>
  );
};

export default Links;
