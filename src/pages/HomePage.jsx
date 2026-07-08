import Navbar from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { MapPin } from "lucide-react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="homepage-hero">
          <div className="developers-indexed-count">
            <div className="green-circle"></div>
            <span>42,918 developers indexed today</span>
          </div>
          <h1 className="homepage-header">Discover GitHub Developers</h1>
          <p className="homepage-subheader">
            Search profiles, explore repositories, and find the people building
            the tools you rely on — all in one clean workspace.
          </p>
          <SearchBar />
        </div>
        <div className="featured-developers-section">
          <h2 className="section-header">Featured Developers</h2>
          <p className="section-subheader">
            Active contributors ranked by recent impact
          </p>
          <div className="developers-grid">
            <div className="developer-card display-card">
              <div className="developer-top">
                <div className="developer-avatar-container">MC</div>
                <div className="developer-data">
                  <p className="developer-name">Maya Chen</p>
                  <span className="account-type">User</span>
                </div>
              </div>
              <p className="developer-bio">
                Building developer tools for distributed systems. Previously
                infra @ two Y Combinator startups.
              </p>
              <div className="developer-location-container">
                <div className="map-icon-container">
                  <MapPin />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="decorative-line"></div>
              <div className="developer-stats-container">
                <div className="stat-container">
                  <span className="stat-value">67</span>
                  <span className="stat-category">Repos</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">4.8k</span>
                  <span className="stat-category">followers</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">5k</span>
                  <span className="stat-category">following</span>
                </div>
              </div>
              <div className="cta primary-cta view-profile-cta">
                View profile
              </div>
            </div>
            <div className="developer-card display-card">
              <div className="developer-top">
                <div className="developer-avatar-container">MC</div>
                <div className="developer-data">
                  <p className="developer-name">Maya Chen</p>
                  <span className="account-type">User</span>
                </div>
              </div>
              <p className="developer-bio">
                Building developer tools for distributed systems. Previously
                infra @ two Y Combinator startups.
              </p>
              <div className="developer-location-container">
                <div className="map-icon-container">
                  <MapPin />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="decorative-line"></div>
              <div className="developer-stats-container">
                <div className="stat-container">
                  <span className="stat-value">67</span>
                  <span className="stat-category">Repos</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">4.8k</span>
                  <span className="stat-category">followers</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">5k</span>
                  <span className="stat-category">following</span>
                </div>
              </div>
              <div className="cta primary-cta view-profile-cta">
                View profile
              </div>
            </div>
            <div className="developer-card display-card">
              <div className="developer-top">
                <div className="developer-avatar-container">MC</div>
                <div className="developer-data">
                  <p className="developer-name">Maya Chen</p>
                  <span className="account-type">User</span>
                </div>
              </div>
              <p className="developer-bio">
                Building developer tools for distributed systems. Previously
                infra @ two Y Combinator startups.
              </p>
              <div className="developer-location-container">
                <div className="map-icon-container">
                  <MapPin />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="decorative-line"></div>
              <div className="developer-stats-container">
                <div className="stat-container">
                  <span className="stat-value">67</span>
                  <span className="stat-category">Repos</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">4.8k</span>
                  <span className="stat-category">followers</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">5k</span>
                  <span className="stat-category">following</span>
                </div>
              </div>
              <div className="cta primary-cta view-profile-cta">
                View profile
              </div>
            </div>
            <div className="developer-card display-card">
              <div className="developer-top">
                <div className="developer-avatar-container">MC</div>
                <div className="developer-data">
                  <p className="developer-name">Maya Chen</p>
                  <span className="account-type">User</span>
                </div>
              </div>
              <p className="developer-bio">
                Building developer tools for distributed systems. Previously
                infra @ two Y Combinator startups.
              </p>
              <div className="developer-location-container">
                <div className="map-icon-container">
                  <MapPin />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="decorative-line"></div>
              <div className="developer-stats-container">
                <div className="stat-container">
                  <span className="stat-value">67</span>
                  <span className="stat-category">Repos</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">4.8k</span>
                  <span className="stat-category">followers</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">5k</span>
                  <span className="stat-category">following</span>
                </div>
              </div>
              <div className="cta primary-cta view-profile-cta">
                View profile
              </div>
            </div>
            <div className="developer-card display-card">
              <div className="developer-top">
                <div className="developer-avatar-container">MC</div>
                <div className="developer-data">
                  <p className="developer-name">Maya Chen</p>
                  <span className="account-type">User</span>
                </div>
              </div>
              <p className="developer-bio">
                Building developer tools for distributed systems. Previously
                infra @ two Y Combinator startups.
              </p>
              <div className="developer-location-container">
                <div className="map-icon-container">
                  <MapPin />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="decorative-line"></div>
              <div className="developer-stats-container">
                <div className="stat-container">
                  <span className="stat-value">67</span>
                  <span className="stat-category">Repos</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">4.8k</span>
                  <span className="stat-category">followers</span>
                </div>
                <div className="stat-container">
                  <span className="stat-value">5k</span>
                  <span className="stat-category">following</span>
                </div>
              </div>
              <div className="cta primary-cta view-profile-cta">
                View profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
