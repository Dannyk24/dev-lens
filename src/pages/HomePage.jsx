import Navbar from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import DeveloperCard from "../components/DeveloperCard";
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
          <h2 className="section-header-lg">Featured Developers</h2>
          <p className="section-subheader">
            Active contributors ranked by recent impact
          </p>
          <div className="developers-grid">
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
