import React from "react";
// , Link
import RouterComp from "./RouterComp";

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
      <RouterComp />
    </div>
  );
};

export default App;
