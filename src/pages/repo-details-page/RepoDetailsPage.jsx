import {
  Book,
  ExternalLink,
  User,
  GitCommitHorizontal,
  Users,
  Clock,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/ui/BackButton";
import RepoCard from "../../components/RepoCard";
import RepoOverview from "./RepoOverview";
import "./RepoDetailsPage.css";
import RepoReadme from "./RepoReadme";
import RepoLicense from "./RepoLicense";
import RepoTopContributors from "./RepoTopContributors";

function RepoDetailsPage() {
  return (
    <>
      <Navbar />
      <BackButton />
      <div className="repo-details-page">
        <div className="repo-details-top">
          <div className="left">
            <div className="repo-owner-container">
              <div className="repo-owner-avatar-container">MC</div>
              <span className="repo-owner-name-container">
                Owner: <span>Maya Chen</span>
              </span>
            </div>
            <div className="repo-name-container">
              <Book />
              <span>pixel-forge</span>
            </div>
            <p className="repo-description">
              Design-to-code pipeline that turns Figma frames into SwiftUI.
            </p>
          </div>
          <div className="right">
            <div className="repo-ctas-container">
              <button className="cta primary-cta">
                <ExternalLink />
                <span>View on Github</span>
              </button>
              <button className="cta secondary-cta">
                <User />
                <span>Visit Owner</span>
              </button>
            </div>
          </div>
        </div>
        <div className="decorative-line"></div>

        <RepoOverview />

        <div className="repo-topic-badges-container">
          <div className="topic-badge">react</div>
          <div className="topic-badge">state management</div>
        </div>

        <section id="repo-information-main-container">
          <div className="left">
            <RepoReadme />
          </div>
          <div className="right">
            <RepoLicense />
            <RepoTopContributors />
          </div>
        </section>
        <section id="repo-statistics">
          <div className="section-header-sm">Repository statistics</div>
          <div className="repo-stat-display-cards">
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <GitCommitHorizontal />
              </div>
              <span className="stat-display-card-value">3.3k</span>
              <span className="stat-display-card-category">Total commits</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Users />
              </div>
              <span className="stat-display-card-value">11</span>
              <span className="stat-display-card-category">Contributors</span>
            </div>
            <div className="repo-stat-card display-card stat-display-card">
              <div className="stat-display-card-icon-container">
                <Clock />
              </div>
              <span className="stat-display-card-value">7d ago</span>
              <span className="stat-display-card-category">Last updated</span>
            </div>
          </div>
        </section>
        <div className="decorative-line"></div>
        <section id="related-repos">
          <div className="section-header-sm">Related repositories</div>
          <div className="related-repos-grid"></div>
        </section>
      </div>
    </>
  );
}

export default RepoDetailsPage;
