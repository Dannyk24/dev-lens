import { Plus, Building, Link, MapPin, Calendar } from "lucide-react";
import dayjs from "dayjs";
import "./ProfileCard.css";
import { formatNumber } from "../../utils/numbers";

function ProfileCard({ developer }) {
  return (
    <aside className="profile-sidebar">
      <div className="profile-card display-card">
        <div className="developer-avatar-container">
          <img src={developer.avatar} alt="" />
        </div>
        <div className="profile-info-container">
          <span className="profile-name">{developer.username}</span>
          <span className="account-type">{developer.accountType}</span>
        </div>
        <div className="profile-bio">
          {developer.bio ? developer.bio : "No bio available"}
        </div>
        <a
          className="cta alternate-cta"
          href={`https://github.com/${developer?.username}`}
          target="_blank"
        >
          <Plus />
          <span>Follow</span>
        </a>
        <div className="profile-data-container">
          <div className="profile-data">
            <Building />
            <span>{developer.company ? developer.company : "No company"}</span>
          </div>
          <div className="profile-data">
            <Link />
            {developer.blog ? (
              <a href={`https://www.${developer.blog}`}>{developer.blog}</a>
            ) : (
              "No blog"
            )}
          </div>
          <div className="profile-data">
            <MapPin />
            <span>
              {developer.location ? developer.location : "No Location"}
            </span>
          </div>
          <div className="profile-data">
            <Calendar />
            <span>
              Joined {dayjs(developer.createdAt).format("MMMM,YYYY")}{" "}
            </span>
          </div>
        </div>
        <div className="decorative-line"></div>
        <div className="profile-stats-container">
          <div className="stat-container">
            <span className="stat-value">{developer.publicRepos}</span>
            <span className="stat-category">Repos</span>
          </div>
          <div className="stat-container">
            <span className="stat-value">
              {formatNumber(developer.followers)}
            </span>
            <span className="stat-category">followers</span>
          </div>
          <div className="stat-container">
            <span className="stat-value">
              {formatNumber(developer.following)}
            </span>
            <span className="stat-category">following</span>
          </div>
        </div>
        <div className="decorative-line"></div>
      </div>
    </aside>
  );
}

export default ProfileCard;
