import { Star, GitFork, Eye, Shield, CircleDot } from "lucide-react";
import "./RepoOverview.css";

function RepoOverview() {
  return (
    <div className="repo-overview">
      <div className="repo-stat">
        <Star />
        <span className="repo-stat-value">6.4k</span>
        <span className="repo-stat-category">Stars</span>
      </div>
      <div className="repo-stat">
        <GitFork />
        <span className="repo-stat-value">280</span>
        <span className="repo-stat-category">forks</span>
      </div>
      <div className="repo-stat">
        <CircleDot />
        <span className="repo-stat-value">17</span>
        <span className="repo-stat-category">issues</span>
      </div>
      <div className="repo-stat">
        <Eye />
        <span className="repo-stat-value">166</span>
        <span className="repo-stat-category">watchers</span>
      </div>
      <div className="repo-stat">
        <Shield />
        <span className="repo-stat-value">MIT</span>
        <span className="repo-stat-category">License</span>
      </div>
      <div className="repo-stat">
        <div className="repo-stat-dot-language-marker"></div>
        <span className="repo-stat-value">Swift</span>
        <span className="repo-stat-category">language</span>
      </div>
    </div>
  );
}

export default RepoOverview;
