import RepoCard from "../../components/RepoCard";
import { Book, GitFork, Users } from "lucide-react";
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
          <span className="stat-display-card-category">
            Public repoistories
          </span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <GitFork />
          </div>
          <span className="stat-display-card-value">748</span>
          <span className="stat-display-card-category">Total forks</span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Users />
          </div>
          <span className="stat-display-card-value">2.1k</span>
          <span className="stat-display-card-category">Followers</span>
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
