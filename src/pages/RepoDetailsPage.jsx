import {
  Book,
  ExternalLink,
  User,
  Star,
  GitFork,
  Eye,
  Shield,
  CircleDot,
  GitCommitHorizontal,
  Users,
  Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import BackButton from "../components/ui/BackButton";
import "./RepoDetailsPage.css";
import RepoCard from "../components/RepoCard";

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
        <div className="repo-topic-badges-container">
          <div className="topic-badge">react</div>
          <div className="topic-badge">state management</div>
        </div>
        <section id="repo-information-main-container">
          <div className="left">
            <div className="readme-container">
              <div className="readme-header-container">
                <Book />
                <span>README.md</span>
              </div>
              <div className="repo-readme">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                ut dignissimos? Nam laboriosam recusandae iure obcaecati beatae?
                At odit ipsum esse voluptates debitis id, ipsa incidunt saepe
                alias adipisci, tenetur expedita cumque inventore pariatur quasi
                deserunt! Quam exercitationem velit odit.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="repo-license-container">
              <div className="card-header">License</div>
              <div className="license-container">
                <Shield />
                <span>MIT License</span>
              </div>
            </div>
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
          <div className="related-repos-grid">
            <RepoCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default RepoDetailsPage;
