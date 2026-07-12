import { Search } from "lucide-react";
import "./SearchBar.css";
import { useEffect } from "react";

export function SearchBar({
  searchQuery,
  setSearchQuery,
  setActivePage,
  isLoading,
  searchResultsElemRef,
}) {
  function handleSearch(query) {
    setSearchQuery(query);
    setActivePage(1);
  }

  function manualSearch() {
    const searchResultsGrid = searchResultsElemRef.current;
    searchResultsGrid.scrollIntoView({
      behavior: "smooth",
    });
    if (isLoading) {
      return;
    }
    handleSearch(searchQuery);
  }

  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search by name,username repos...."
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button
        className="cta primary-cta main-app-search-cta"
        onClick={manualSearch}
      >
        Search
      </button>
    </div>
  );
}
