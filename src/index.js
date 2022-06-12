import React from "react"; // import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.js";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

//--

//**_render
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

//!
//! Prior to React18
// const rootElement = document.getElementById("root");

// ReactDOM.render(
//   <BrowserRouter>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </BrowserRouter>,
//   rootElement
// );
