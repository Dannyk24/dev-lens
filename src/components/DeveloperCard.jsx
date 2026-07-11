import { Link } from "react-router";
import "./DeveloperCard.css";

function DeveloperCard({ developer }) {
  return (
    <div className="developer-card display-card">
      <div className="developer-top">
        <div className="developer-avatar-container">
          <img src={developer.avatar} alt="" />
        </div>
        <div className="developer-data">
          <p className="developer-name">{developer.name}</p>
          <span className="account-type">{developer.accountType}</span>
        </div>
      </div>
      <div className="decorative-line"></div>
      <Link
        to={`/profile/${developer.name}`}
        className="cta primary-cta view-profile-cta"
      >
        View profile
      </Link>
    </div>
  );
}

export default DeveloperCard;
