import React from "react";
import { Mail, FileText, CheckCircle, Code, Users, Award } from "lucide-react";
import "../assets/Timeline.css"; // Import the CSS file



const timelineEvents = [
    { date: "July 03, onwards", title: "Sending Invites", desc: "Sending invites to companies for recruitment.", icon: <Mail size={28} color="#007bff" /> },
    { date: "Aug 07 to 14", title: "Student Registration", desc: "Students register for placements.", icon: <FileText size={28} color="#007bff" /> },
    { date: "Aug 15 to 27", title: "Application Screening", desc: "Companies review student applications.", icon: <CheckCircle size={28} color="#007bff" /> },
    { date: "Aug 16, onwards", title: "Online Assessments", desc: "Technical and aptitude tests.", icon: <Code size={28} color="#007bff" /> },
    { date: "Aug 30, onwards", title: "Interviews", desc: "Companies conduct interviews for shortlisted candidates.", icon: <Users size={28} color="#007bff" /> },
    { date: "Sep 10, onwards", title: "Offers & Joining", desc: "Companies extend offers and students accept them.", icon: <Award size={28} color="#007bff" /> }
  ];
  
  const Timeline = () => {
    return (
      <div className="timeline-container">
        <h2 className="timeline-title">Placement Timeline</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">{event.icon}</div>
              <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;