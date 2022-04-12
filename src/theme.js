// A custom theme for this app
import { red, createTheme } from '@mui/material';

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
  components: {
    // Name of the component
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
  },
});

export default theme;
