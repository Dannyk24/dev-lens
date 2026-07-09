import { ExternalLink, Dot, Share2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/ui/BackButton";
import ProfileCard from "./ProfileCard";
import ProfileOverviewTab from "./ProfileOverviewTab";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <BackButton />
        <div className="profile-shell">
          <ProfileCard />
          <div className="profile-main">
            <span className="profile-name">Maya Chen</span>
            <div className="profile-link-row">
              <a href="#" className="view-on-github-link">
                <ExternalLink />
                <span>View on Github</span>
              </a>
              <div className="decorative-dot">
                <Dot />
              </div>
              <span className="year-joined">Joined 2018</span>
              <div className="cta secondary-cta share-profile-cta">
                <Share2 />
                <span>Share</span>
              </div>
            </div>
            <div className="profile-tabs-container">
              <div className="tab-selectors-container">
                <div className="tab-selector-container active-tab">
                  <span>Overview</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
                <div className="tab-selector-container">
                  <span>Repositories</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
                <div className="tab-selector-container">
                  <span>Stars</span>
                  <div className="active-tab-line-indicator"></div>
                </div>
              </div>
              <div className="decorative-line tab-selector-underline"></div>
            </div>
            <ProfileOverviewTab />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
