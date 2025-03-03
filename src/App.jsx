import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GrowthMarketing from "./pages/GrowthMarketing";
import Cybersecurity from "./pages/Cybersecurity";
import LoginRegister from "./pages/LoginRegister";
import DigitalTransformation from "./pages/DigitalTransformation";
import OtherServicesPartnerships from "./pages/OtherServicesPartnerships";
import Hiring from "./pages/Hiring";
import "./assets/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/growth-marketing" element={<GrowthMarketing />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/other-services-partnerships" element={<OtherServicesPartnerships />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
