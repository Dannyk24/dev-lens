import { Search } from "lucide-react";
import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <Search />
      </div>
      <input type="text" placeholder="Search by name,username repos...." />
      <button className="cta primary-cta main-app-search-cta">Search</button>
    </div>
  );
}
