import React from 'react';
import '../Styles/activity.css';

import img1 from '../assets/activity/picture1.jpg';
import img2 from '../assets/activity/picture2.jpg';
import img3 from '../assets/activity/picture3.jpg';
import img4 from '../assets/activity/picture4.jpg';
import img5 from '../assets/activity/picture5.jpg';

const trainingData = [
  {
    id: 1,
    title: 'LinkedIn Career Kickstart Program',
    date: '13/11/2024 from 2:00 P.M to 4:00 P.M',
    audience: 'B.E 2nd, 3rd a nd 4th Year, M.E 2nd Year and MCA',
    image: img1,
  },
  {
    id: 2,
    title: 'CRT In-campus Training Program by T.I.M.E.',
    date: '21/04/2025 to 26/04/2025 from 4:00 P.M to 6:00 P.M',
    audience: 'B.E 3rd Year students',
    image: img2,
  },
  {
    id: 3,
    title: 'Three-day Placement Training Program "SAMANVAYA-2025" & Job Readiness Training',
    date: '03/03/2025 to 05/03/2025 from 9:00 A.M to 5:00 P.M',
    audience: 'B.E 2nd & 3rd Year students',
    image: img3,
  },
  {
    id: 4,
    title: "Three-day Placement Training Program on “Job Readiness /Campus Recruitment Training”",
    date: '03/03/2025 to 05/03/2025 from 9:00 A.M to 5:00 P.M',
    audience: 'B.E 2nd  Year students.',
    image: img4,
  },
   {
    id: 5,
    title: "Felicitation to students and Achievers Talk for guiding pre-final year students",
    date: ' 19th April 2025,11:00 A.M to 1:00 P.M',
    audience: 'B.E 3nd  Year students.',
    image: img5,
  },
];

const TrainingCards = () => {
  return (
    <div className="training-section">
      <h1 className="section-heading">PLACEMENT ACTIVITIES</h1>
      <div className="card-container">
        {trainingData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <h2>{item.title}</h2>
              <p><strong>Targeted Students:</strong> {item.audience}</p>
              <p><strong>Schedule:</strong> {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCards;
