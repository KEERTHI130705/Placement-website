import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="#" className="logo">
          <img src="/assets/image.png" alt="UCEOU Logo" className="logo-img" />
          <span className="logo-text">UCEOU Placements</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav">
          {[
            "home",
            "tpo-info",
            "why-recruit",
            "achievements",
            "messages",
            "process",
            "statistics",
            "recruiters",
            "contact",
          ].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="nav-item"
            >
              {item.replace("-", " ").toUpperCase()}
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
              "home",
              "tpo-info",
              "why-recruit",
              "achievements",
              "messages",
              "process",
              "statistics",
              "recruiters",
              "contact",
            ].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="mobile-nav-item"
                onClick={() => setIsOpen(false)}
              >
                {item.replace("-", " ").toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
