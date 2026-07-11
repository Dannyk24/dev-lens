import { Search } from "lucide-react";
import "./SearchBar.css";

export function SearchBar({ searchQuery, setSearchQuery, setActivePage }) {
  function handleSearch(inputText) {
    const query = inputText;
    setSearchQuery(query);
    setActivePage(1);
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
      <button className="cta primary-cta main-app-search-cta">Search</button>
    </div>
  );
}
