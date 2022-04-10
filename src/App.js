import React from "react";
// , Link
import LandingPage from "./LandingPage";

// import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/pages/HomePage";
// import ResumePage from "./components/pages/ResumePage";
// import ProjectDisplayPage from "./components/pages/ProjectDisplayPage";
// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="portfolio" element={<ProjectDisplayPage />} />
//   <Route path="resume" element={<ResumePage />} />
// </Routes>;
// * ======================

const App = () => {
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
};

export default App;
