import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/tpo_messages.css";  // Import CSS

const messages = [
  {
    name: "Prof Chandra Shekhar",
    designation: "Prinicipal,UCEOU",
    content: "We are committed to providing the best opportunities for our students...",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
  },
  {
    name: "Dr.D.Suman",
    designation: "Training & Placement Officer",
    content: "Our goal is to bridge the gap between students and industry...",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"
  }
];

const MessagesSection = () => {
  return (
    <section id="messages" className="messages-section">
      <h2 className="messages-heading">Messages from TPO</h2>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={700}
          emulateTouch={true}
        >
          {messages.map((message, index) => (
            <div key={index} className="message-card">
              <img 
                src={message.image} 
                alt={message.name} 
                className="message-image"
              />
              <div className="message-text">
                <h3 className="message-name">{message.name}</h3>
                <p className="message-designation">{message.designation}</p>
                <p className="message-content">{message.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MessagesSection;



