import { Plus, Building, Link, MapPin, Calendar } from "lucide-react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <aside className="profile-sidebar">
      <div className="profile-card display-card">
        <div className="developer-avatar-container">MC</div>
        <div className="profile-info-container">
          <span className="profile-name">Maya Chen</span>
          <span className="account-type">User</span>
        </div>
        <div className="profile-bio">
          Mobile engineer crafting fast, delightful apps. Speaker at DroidCon
          and mobile meetups worldwide.
        </div>
        <div className="cta alternate-cta">
          <Plus />
          <span>Follow</span>
        </div>
        <div className="profile-data-container">
          <div className="profile-data">
            <Building />
            <span>Freelance</span>
          </div>
          <div className="profile-data">
            <Link />
            <a>mayachen.dev</a>
          </div>
          <div className="profile-data">
            <MapPin />
            <span>San Francisco, CA</span>
          </div>
          <div className="profile-data">
            <Calendar />
            <span>Joined July 2018</span>
          </div>
        </div>
        <div className="decorative-line"></div>
        <div className="profile-stats-container">
          <div className="stat-container">
            <span className="stat-value">67</span>
            <span className="stat-category">Repos</span>
          </div>
          <div className="stat-container">
            <span className="stat-value">4.8k</span>
            <span className="stat-category">followers</span>
          </div>
          <div className="stat-container">
            <span className="stat-value">5k</span>
            <span className="stat-category">following</span>
          </div>
        </div>
        <div className="decorative-line"></div>
      </div>
    </aside>
  );
}

export default ProfileCard;
