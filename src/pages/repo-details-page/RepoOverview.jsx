import { Star, GitFork, Eye, Shield, CircleDot } from "lucide-react";
import "./RepoOverview.css";
import { formatNumber } from "../../utils/numbers";

function RepoOverview({ repository }) {
  const language = repository?.language?.toLowerCase();
  return (
    <div className="repo-overview">
      <div className="repo-stat">
        <Star />
        <span className="repo-stat-value">
          {formatNumber(repository.stars)}
        </span>
        <span className="repo-stat-category">Stars</span>
      </div>
      <div className="repo-stat">
        <GitFork />
        <span className="repo-stat-value">
          {formatNumber(repository.forks)}
        </span>
        <span className="repo-stat-category">forks</span>
      </div>
      <div className="repo-stat">
        <CircleDot />
        <span className="repo-stat-value">
          {formatNumber(repository.issues)}
        </span>
        <span className="repo-stat-category">issues</span>
      </div>
      <div className="repo-stat">
        <Eye />
        <span className="repo-stat-value">
          {formatNumber(repository.watchers)}
        </span>
        <span className="repo-stat-category">watchers</span>
      </div>
      <div className="repo-stat">
        <Shield />
        <span className="repo-stat-value">
          {repository.license ? repository.license.name : "None"}
        </span>
        <span className="repo-stat-category">License</span>
      </div>
      <div className="repo-stat">
        <div
          className={`repo-stat-dot-language-marker ${language}-language-dot-marker`}
        ></div>
        <span className="repo-stat-value">
          {repository.language ? repository.language : "Unspecified"}
        </span>
        <span className="repo-stat-category">language</span>
      </div>
    </div>
  );
}

export default RepoOverview;
