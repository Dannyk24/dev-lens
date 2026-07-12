import { Book, Star, GitFork } from "lucide-react";
import "./RepoCard.css";
import { formatNumber } from "../utils/numbers";
import { getRelativeTime } from "../utils/time";
import { Link } from "react-router";

function RepoCard({ repository, owner }) {
  const repoLanguage = repository?.language?.toLowerCase();

  return (
    <Link
      className="repository-card display-card"
      to={`/repository/${owner}/${repository.name}`}
    >
      <div className="repo-top">
        <div className="repo-name-container">
          <Book />
          <span>{repository.name}</span>
        </div>
        <div className="repo-language-container">
          <div
            className={`language-dot-marker ${repoLanguage}-language-dot-marker`}
          ></div>
          <span>
            {repository.language ? repository.language : "Unspecified"}
          </span>
        </div>
      </div>
      <p className="repo-description">
        {repository.description
          ? repository.description
          : "No description available"}
      </p>
      <div className="decorative-line"></div>
      <div className="repo-data-container">
        <div className="left">
          <div className="repo-data">
            <Star />
            <span>{formatNumber(repository.stars)}</span>
          </div>
          <div className="repo-data">
            <GitFork />
            <span>{repository.forks}</span>
          </div>
        </div>
        <div className="right">
          <span>Updated {getRelativeTime(repository.updatedAt)}</span>
        </div>
      </div>
    </Link>
  );
}

export default RepoCard;
