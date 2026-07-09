import { CodeXml, Moon, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-left">
        <div className="app-logo">
          <Link to="/" className="logo-icon">
            <CodeXml />
          </Link>
          <span>GitHub Explorer</span>
        </div>
      </div>
      <div className="header-right">
        <div className="header-icon">
          <Moon />
        </div>
        <a
          className="header-icon"
          href="https://www.github.com"
          target="_blank"
        >
          <ExternalLink />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
