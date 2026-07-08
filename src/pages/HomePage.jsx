import Navbar from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
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
      </div>
    </>
  );
}

export default HomePage;
