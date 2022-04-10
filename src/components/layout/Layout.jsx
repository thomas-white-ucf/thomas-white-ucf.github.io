import { Header, Footer } from "./index";
import { Grid } from "@mui/material";
import whiteWaveImage from "../../assets/images/white-waves.png";

const Layout = ({ children }) => {
  //

  return (
    <main role="main">
      <Grid container>
        <Grid
          component="main"
          item
          sx={{
            color: "primary.main",
            backgroundImage: `url(${whiteWaveImage})`,
            border: 3,
            borderRadius: 3,
            minWidth: "100%",
          }}
        >
          {/* //! MAIN CONTENT 
                //!> keep FOOTER is Outside this Grid Item */}
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              mx: "auto",
            }}
          >
            {/* //! - MAIN - - - - - */}
            <Grid container mb={10}>
              {/* //! - HEADER - - - - */}
              <Grid item xs={12} mb={10}>
                <Header />
              </Grid>

              <Grid item xs={12} md={10}>
                <Grid item xs={1}></Grid>
                <Grid
                  item
                  xs={10}
                  sx={{
                    p: 2,
                    mx: "auto",
                    spacing: 2,
                    rowSpacing: 1,
                    columnSpacing: 2,
                    borderRadius: 3,
                    display: "flex",
                  }}
                >
                  {children}
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* // ! - FOOTER - - - - * (Keep outside center Grid) *- */}
        <Grid
          item
          xs={12}
          component="footer"
          sx={{
            mt: "auto",
            position: "fixed",
            bottom: "0px",
            width: "100vw",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container sx={{ display: "flex", flexDirection: "row" }}></Grid>
          <Footer />
        </Grid>
      </Grid>
    </main>
  );
};

export default Layout;

// ** ==== // ** ====
// ** ==== // ** ====
