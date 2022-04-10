// import HomePage from "./components/pages/HomePage";
import { Layout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";
import PortfolioPage from "./components/pages/PortfolioPage";

//

const LandingPage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio2022" element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Routes>
    </Layout>
  );
};

export default LandingPage;
