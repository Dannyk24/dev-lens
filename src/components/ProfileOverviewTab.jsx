import RepoCard from "../components/RepoCard";
import { Book } from "lucide-react";
import "./ProfileOverviewTab.css";

function ProfileOverviewTab() {
  return (
    <div className="profile-overview-tab">
      <div className="stat-display-cards-container">
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Book />
          </div>
          <span className="stat-display-card-value">55</span>
          <span className="stat-display-card-category">Total repoistories</span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Book />
          </div>
          <span className="stat-display-card-value">55</span>
          <span className="stat-display-card-category">Total repoistories</span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Book />
          </div>
          <span className="stat-display-card-value">55</span>
          <span className="stat-display-card-category">Total repoistories</span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Book />
          </div>
          <span className="stat-display-card-value">55</span>
          <span className="stat-display-card-category">Total repoistories</span>
        </div>
      </div>
      <section id="most-starred-repo">
        <div className="section-header-sm">Most starred repository</div>
        <RepoCard />
      </section>
      <section id="recent-repos">
        <div className="section-header-sm">Recent repositories</div>
        <div className="recent-repos-grid">
          <RepoCard />
        </div>
      </section>
    </div>
  );
}

export default ProfileOverviewTab;
