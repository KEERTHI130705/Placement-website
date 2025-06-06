import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Tpo_info from "./Components/Tpo_info";
import MessagesSection from "./Components/tpo_messages";
import Timeline from "./Components/Timeline";
import HomeBanner from "./Components/Homebanner";
import Footer from "./Components/Footer";
import RecruitersGrid from "./Components/RecruitersGrid";
import Statistics from "./Components/Statistics";
import ContactForm from "./Components/contactform";
import Activity from "./Components/activity";
import { scrollToSection } from "./utils/scrollToSection";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");

    if (section) {
      // Delay to allow component to render
      setTimeout(() => {
        scrollToSection(section);
      }, 300);

      // Clean up URL
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <HomeBanner />
      <Tpo_info />
      <div id="messages"><MessagesSection /></div>
      <div id="process"><Timeline /></div>
      <div id="statistics"><Statistics /></div> 
      <div id="recruiters"><RecruitersGrid /></div>
      <div id="contact"><ContactForm /></div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </Router>
  );
}

export default App;
