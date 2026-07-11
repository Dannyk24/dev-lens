import RepoCard from "../../components/RepoCard";
import { Book, GitFork, Users } from "lucide-react";
import "./ProfileOverviewTab.css";
import { formatNumber } from "../../utils/numbers";
import dayjs from "dayjs";

function ProfileOverviewTab({ developer, repos }) {
  let mostStarredRepo = repos
    .slice() //Slice so your not directly modifying the developers repos
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 1)[0]; //[0] cause .slice returns an array

  return (
    <div className="profile-overview-tab">
      <div className="stat-display-cards-container">
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Book />
          </div>
          <span className="stat-display-card-value">
            {developer.publicRepos}
          </span>
          <span className="stat-display-card-category">
            Public repositories
          </span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <GitFork />
          </div>
          <span className="stat-display-card-value">
            {repos?.reduce((total, repo) => {
              return total + repo.forks;
            }, 0)}
          </span>
          <span className="stat-display-card-category">Total forks</span>
        </div>
        <div className="display-card stat-display-card">
          <div className="stat-display-card-icon-container">
            <Users />
          </div>
          <span className="stat-display-card-value">
            {formatNumber(developer.followers)}
          </span>
          <span className="stat-display-card-category">Followers</span>
        </div>
      </div>
      <section id="most-starred-repo">
        <div className="section-header-sm">Most starred repository</div>
        {repos.length > 0 ? (
          <RepoCard repository={mostStarredRepo} />
        ) : (
          "No starred repositories available"
        )}
      </section>
      <section id="recent-repos">
        <div className="section-header-sm">Recent repositories</div>
        <div className="recent-repos-grid">
          {repos.length > 0
            ? repos
                .sort(
                  (a, b) =>
                    dayjs(b.updatedAt).valueOf() - dayjs(a.updatedAt).valueOf(),
                )
                .map((repository) => (
                  <RepoCard repository={repository} key={repository.id} />
                ))
            : "No recent repositories available"}
        </div>
      </section>
    </div>
  );
}

export default ProfileOverviewTab;
