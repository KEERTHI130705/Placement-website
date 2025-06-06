import { useState } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../Styles/Header.css";
import logo from "../assets/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNav = (id) => {
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="https://uceou.edu/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="UCEOU Logo" className="logo-img" />
          </a>
          <div className="logo-text-container">
            <span className="logo-text">Training & Placement Office</span>
            <span className="logo-subtext">
              University College of Engineering, Osmania University
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="nav">
          <RouterLink to="/" className="nav-item">Home</RouterLink>
          <button className="nav-item" onClick={() => handleScrollNav("messages")}>Messages</button>
          <button className="nav-item" onClick={() => handleScrollNav("process")}>Timeline</button>
          <button className="nav-item" onClick={() => handleScrollNav("statistics")}>Statistics</button>
          <button className="nav-item" onClick={() => handleScrollNav("recruiters")}>Recruiters</button>
          <RouterLink to="/activity" className="nav-item">Placements activities</RouterLink>
          <RouterLink to="/ContactForm" className="nav-item">Contact</RouterLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <RouterLink to="/" className="mobile-nav-item" onClick={() => setIsOpen(false)}>HOME</RouterLink>
            <button className="mobile-nav-item" onClick={() => handleScrollNav("messages")}>MESSAGES</button>
            <button className="mobile-nav-item" onClick={() => handleScrollNav("process")}>PROCESS</button>
            <button className="mobile-nav-item" onClick={() => handleScrollNav("statistics")}>STATISTICS</button>
            <button className="mobile-nav-item" onClick={() => handleScrollNav("recruiters")}>RECRUITERS</button>
            <RouterLink to="/activity" className="mobile-nav-item" onClick={() => setIsOpen(false)}>PLACEMENTS ACTIVITY</RouterLink>
            <RouterLink to="/ContactForm" className="mobile-nav-item" onClick={() => setIsOpen(false)}>CONTACT</RouterLink>
            {/* <a href="/" className="mobile-nav-item" onClick={() => setIsOpen(false)}>Brochure</a> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
