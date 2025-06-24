import React from 'react';
import '../Styles/Statistics.css';
import img1 from '../assets/statistics/placement1.png';
import img2 from '../assets/statistics/PercentageOFstu1.png';
; // Add your Word doc path here

const Statistics = () => {
  return (
    <section className="stats-section" id="statistics">
      <h1 className="stats-title"><b>Our Impact in Numbers</b></h1>
      <div className="stats-container">
        <img src={img1} alt="Stat 1" />
        <img src={img2} alt="Stat 2" />
      </div>
    </section>
  );
};

export default Statistics;