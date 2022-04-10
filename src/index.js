import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
//
import App from "./App";

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
