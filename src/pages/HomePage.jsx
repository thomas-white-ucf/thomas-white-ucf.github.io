import { Grid } from "@mui/material";
import HomeDetail from "../components/HomeDetail";
//

const HomePage = () => {
  return (
    <Grid item xs={12}>
      {/* <a href="https://visitcount.itsvg.in">
        <img src="https://visitcount.itsvg.in/api?id=twhite386&label=Pups&color=6&icon=4&pretty=true" />
      </a> */}
      <HomeDetail />
    </Grid>
  );
};

export default HomePage;
