import "./RepoTopContributors.css";

function RepoTopContributors() {
  return (
    <div className="top-contributors-container">
      <div className="card-header">Top Contributors</div>
      <div className="top-contributors">
        <div className="top-contributor">
          <div className="left">
            <div className="contributor-avatar">MC</div>
            <span className="contributor-name">Maya Chen</span>
          </div>
          <div className="right">
            <span className="total-commits">2.1k commits</span>
          </div>
        </div>
        <div className="top-contributor">
          <div className="left">
            <div className="contributor-avatar">MC</div>
            <span className="contributor-name">Maya Chen</span>
          </div>
          <div className="right">
            <span className="total-commits">2.1k commits</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoTopContributors;
