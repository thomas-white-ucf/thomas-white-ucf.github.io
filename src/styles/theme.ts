// A custom theme for this app
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";
// import TitilliumWeb from "./assets/fonts/TitilliumWeb-SemiBold.ttf";

// const titilliumWeb = {
//   fontFamily: "TitilliumWeb",
//   fontStyle: "semi-bold",
//   fontDisplay: "swap",
//   fontWeight: "600",
//   src: `
//    local('TitillumWeb'),
//    local('TitillumWeb-SemiBold'),
//    url(${TitilliumWeb}) format('ttf')
//  `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
// };

//! __THEME___createTheme

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "TitilliumWeb", "Roboto"].join(","),
    h1: {
      fontFamily: '"TitilliumWeb", Open Sans',
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [titilliumWeb],
  //     },
  //   },
  // },
  components: {
    // Name of the component
    // footer: {
    //   minHeight: "100px"
    // },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "1rem",
          background: "linear-gradient( #5D17FE, #5D17FE, #d3d3d3)",
          color: "whitesmoke",
          p: 1,
          m: 1,
          fontWeight: 650,
        },
      },
    },
    //
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "1rem",
          // background: "linear-gradient( #5D17FE, #5D17FE, #d3d3d3)",
          justifyContent: "center",
          color: "whitesmoke",
          p: 2,
          m: 2,
        },
      },
    },
  },
});

export default theme;
