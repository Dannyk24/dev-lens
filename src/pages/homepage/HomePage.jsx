import Navbar from "../../components/Navbar";
import { SearchBar } from "./SearchBar";
import Pagination from "./Pagination";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { fetchDevelopers, fetchRepositories } from "../../api/githubServices";
import RepoCard from "../../components/RepoCard";
import DeveloperCard from "../../components/DeveloperCard";
import DeveloperCardSkeleton from "../../components/DeveloperCardSkeleton";
import SearchFilterInput from "./SearchFilterInput";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchFilter, setSearchFilter] = useState("developers");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  let totalCount =
    searchFilter === "developers"
      ? searchResults?.developers.totalCount
      : searchResults?.repositories.totalCount;

  let totalPages = totalCount ? Math.ceil(totalCount / 10) : 0;

  useEffect(() => {
    if (searchQuery === "") {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timeoutId = setTimeout(async () => {
      try {
        const [developers, repositories] = await Promise.all([
          fetchDevelopers(searchQuery, activePage),
          fetchRepositories(searchQuery, activePage),
        ]);
        const results = {
          developers,
          repositories,
        };
        setSearchResults(results);
      } catch (error) {
        console.log(error);
        setSearchResults(null);
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, activePage]);

  function renderSearchResults() {
    if (!searchResults) {
      return;
    }
    if (searchFilter === "developers") {
      if (searchResults.developers.data.length === 0) {
        return "No search results for this query";
      }
      return searchResults.developers.data.map((developer) => (
        <DeveloperCard developer={developer} key={developer.id} />
      ));
    } else if (searchFilter === "repositories") {
      if (searchResults.repositories.data.length === 0) {
        return "No search results for this query";
      }
      return searchResults.repositories.data.map((repository) => (
        <RepoCard repository={repository} key={repository.id} />
      ));
    }
  }

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
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActivePage={setActivePage}
          />
        </div>
        <div className="search-results-section">
          <h2 className="section-header-lg">Search results</h2>
          <p className="section-subheader">Your search results appear here</p>
          <SearchFilterInput
            setSearchFilter={setSearchFilter}
            searchFilter={searchFilter}
          />
          <div className="search-results-grid">
            {isLoading
              ? [
                  <DeveloperCardSkeleton key={1} />,
                  <DeveloperCardSkeleton key={2} />,
                  <DeveloperCardSkeleton key={3} />,
                  <DeveloperCardSkeleton key={4} />,
                  <DeveloperCardSkeleton key={5} />,
                  <DeveloperCardSkeleton key={6} />,
                  <DeveloperCardSkeleton key={7} />,
                  <DeveloperCardSkeleton key={8} />,
                  <DeveloperCardSkeleton key={9} />,
                  <DeveloperCardSkeleton key={10} />,
                ]
              : renderSearchResults()}
          </div>
          {searchResults && (
            <Pagination
              activePage={activePage}
              setActivePage={setActivePage}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
