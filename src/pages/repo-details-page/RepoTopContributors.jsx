import { formatNumber } from "../../utils/numbers";
import "./RepoTopContributors.css";
import { Link } from "react-router";

function RepoTopContributors({ repository }) {
  return (
    <div className="top-contributors-container">
      <div className="card-header">Top Contributors</div>
      <div className="top-contributors">
        {repository.contributors.slice(0, 3).map((contributor) => {
          return (
            <Link
              className="top-contributor"
              key={contributor.id}
              to={`/profile/${contributor.name}`}
            >
              <div className="left">
                <div className="contributor-avatar">
                  <img src={contributor.avatar} alt="" />
                </div>
                <span className="contributor-name">{contributor.name}</span>
              </div>
              <div className="right">
                <span className="total-commits">
                  {formatNumber(contributor.contributions)} commits
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RepoTopContributors;
