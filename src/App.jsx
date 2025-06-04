import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Tpo_info from "./Components/Tpo_info";
import MessagesSection from "./Components/tpo_messages";
import Timeline from "./Components/Timeline";
<<<<<<< HEAD
import HomeBanner from './Components/Homebanner';
import StudentLogin from './Components/StudentLogin';
import RecruiterLogin from './Components/RecruiterLogin';
import Footer from './Components/Footer';
import RecruitersGrid from './Components/RecruitersGrid';
import Statistics from './Components/Statistics';
import ContactForm from './Components/contactform.jsx';
=======
import HomeBanner from "./Components/Homebanner";
import StudentLogin from "./Components/StudentLogin";
import RecruiterLogin from "./Components/RecruiterLogin";
import Footer from "./Components/Footer";
import RecruitersGrid from "./Components/RecruitersGrid";
import Statistics from "./Components/Statistics";

>>>>>>> e995e62b4665ec98e5b952ed456d89c23578c065
function App() {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={
          <>
            <HomeBanner />
            <Tpo_info />
            <MessagesSection />
            <Statistics/>

            <RecruitersGrid/>
            <Timeline />
            <ContactForm />
            <Footer/>
          </>
        } />
        {/* <Route path="/student-login" element={<StudentLogin />} />
=======
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeBanner />
                <Tpo_info />
                <MessagesSection />
                <Statistics />
                <RecruitersGrid />
                <Timeline />
                <Footer />
              </>
            }
          />{" "}
          {/* <Route path="/student-login" element={<StudentLogin />} />
>>>>>>> e995e62b4665ec98e5b952ed456d89c23578c065
        <Route path="/recruiter-login" element={<RecruiterLogin />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
