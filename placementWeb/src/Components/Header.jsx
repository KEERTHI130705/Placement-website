import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "../Styles/Header.css";
import logo from "../assets/image.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo - Clicking this scrolls to Home */}
        <Link to="home" smooth={true} duration={500} offset={-80} className="logo">
          <img src={logo} alt="UCEOU Logo" className="logo-img" />
          <span className="logo-text">UCEOU Placements</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="nav">
          {[
            { id: "home", label: "HOME" },
            { id: "tpo-info", label: "TPO INFO" },
            { id: "why-recruit", label: "WHY RECRUIT" },
            { id: "achievements", label: "ACHIEVEMENTS" },
            { id: "messages", label: "MESSAGES" },
            { id: "process", label: "PROCESS" },
            { id: "statistics", label: "STATISTICS" },
            { id: "recruiters", label: "RECRUITERS" },
            { id: "contact", label: "CONTACT" },
          ].map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // Adjust for fixed header
              className="nav-item"
            >
              {item.label}
            </Link>
          ))}
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
            {[
              { id: "home", label: "HOME" },
              { id: "tpo-info", label: "TPO INFO" },
              { id: "why-recruit", label: "WHY RECRUIT" },
              { id: "achievements", label: "ACHIEVEMENTS" },
              { id: "messages", label: "MESSAGES" },
              { id: "process", label: "PROCESS" },
              { id: "statistics", label: "STATISTICS" },
              { id: "recruiters", label: "RECRUITERS" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="mobile-nav-item"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <img src={logo} alt="UCEOU Logo" className="logo-img" />
        
        </div>
      )}
    </header>
  );
};

export default Header;
