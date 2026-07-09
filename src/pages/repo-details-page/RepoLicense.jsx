import { Shield } from "lucide-react";
import "./RepoLicense.css";

function RepoLicense() {
  return (
    <div className="repo-license-container">
      <div className="card-header">License</div>
      <div className="license-container">
        <Shield />
        <span>MIT License</span>
      </div>
    </div>
  );
}

export default RepoLicense;
