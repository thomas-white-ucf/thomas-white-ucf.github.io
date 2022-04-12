import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
//
import App from "./App";

import { ThemeProvider, CssBaseline } from '@mui/material';

const container = document.getElementById("root");
const root = createRoot(container);

//--

//**_render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

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
