import React from "react";
import { Layout } from "./layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter } from "react-router-dom";
// 

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="resume" element={<ResumePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
