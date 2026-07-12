import { Shield } from "lucide-react";
import "./RepoLicense.css";

function RepoLicense({ repository }) {
  return (
    <div className="repo-license-container">
      <div className="card-header">License</div>
      {repository.license ? (
        <div className="license-container">
          <Shield />
          <span>{repository.license.name}</span>
        </div>
      ) : (
        "No License available"
      )}
    </div>
  );
}

export default RepoLicense;
