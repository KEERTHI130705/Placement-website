import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Homebanner'
import './App.css';
import Tpo_info from './Components/Tpo_info'
import MessagesSection from './Components/tpo_messages';
import Timeline from "./Components/Timeline";
import HomeBanner from './Components/Homebanner';
import StudentLogin from './Components/StudentLogin';
import RecruiterLogin from './Components/RecruiterLogin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HomeBanner />
            <Tpo_info />
            <MessagesSection />
            <Timeline />
          </>
        } />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

