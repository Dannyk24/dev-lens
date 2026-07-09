import { Book, Star, GitFork } from "lucide-react";
import "./RepoCard.css";

function RepoCard() {
  return (
    <div className="repository-card display-card">
      <div className="repo-top">
        <div className="repo-name-container">
          <Book />
          <span>pixel-forge</span>
        </div>
        <div className="repo-language-container">
          <div className="language-dot-marker"></div>
          <span>Typescript</span>
        </div>
      </div>
      <p className="repo-description">
        Design-to-code pipeline that turns Figma frames into SwiftUI.
      </p>
      <div className="decorative-line"></div>
      <div className="repo-data-container">
        <div className="left">
          <div className="repo-data">
            <Star />
            <span>6.4k</span>
          </div>
          <div className="repo-data">
            <GitFork />
            <span>280</span>
          </div>
        </div>
        <div className="right">
          <span>Updated 7d ago</span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
