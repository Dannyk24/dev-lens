import { CodeXml, Moon, ExternalLink } from "lucide-react";

function Navbar() {
  return (
    <header>
      <div className="header-left">
        <div className="app-logo">
          <div className="logo-icon">
            <CodeXml />
          </div>
          <span>GitHub Explorer</span>
        </div>
        <div className="header-icon">
          <Moon />
        </div>
        <div className="header-icon">
          <ExternalLink />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
