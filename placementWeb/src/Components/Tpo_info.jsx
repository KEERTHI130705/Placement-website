import React from "react";
import "../Styles/Tpo_info.css"; // Import the CSS file
import image from "../assets/image.png"; // Import the image

const Tpo_info = () => {
  return (
    <section id =" "className="tpo-container">
      <div className="tpo-content">
        {/* Left Side - Image */}
        <div className="tpo-image">
          <img src={image} alt="College Building" />
        </div>

        {/* Right Side - TPO Info */}
        <div className="tpo-info">
          <h2>Training & Placement Officer</h2>
          <p>
            The Training & Placement Office (TPO) is committed to bridging the gap
            between students and recruiters by providing exceptional opportunities
            for placements and internships.
          </p>
          <p>
            Our mission is to facilitate the professional growth of students by
            conducting training sessions, career guidance programs, and industry
            interactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tpo_info;
