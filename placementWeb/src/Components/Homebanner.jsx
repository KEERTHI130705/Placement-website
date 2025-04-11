import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/HomeBanner.css"; // Import CSS file
import videoSrc from "../assets/banner1.mp4"; // Your video path

const HomeBanner = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/student-login");
  };

  const handleRecruiterClick = () => {
    navigate("/recruiter-login");
  };

  return (
    <div className="banner-container">
      <video autoPlay loop muted playsInline className="banner-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">
          One Platform for <span className="highlight">Placements</span> &{" "}
          <span className="highlight">Internships</span>
        </h1>
        <p className="banner-text">
          Connecting students, recruiters, and coordinators to streamline the
          hiring process.
        </p>
        <div className="banner-buttons">
          <button className="btn" onClick={handleStudentClick}>👨‍🎓 Student</button>
          <button className="btn" onClick={handleRecruiterClick}>💼 Recruiter</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
