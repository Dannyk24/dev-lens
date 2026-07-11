import "./SearchFilterInput.css";

function SearchFilterInput({ searchFilter, setSearchFilter }) {
  return (
    <select
      name=""
      id="search-filter-input"
      value={searchFilter}
      onChange={(e) => {
        setSearchFilter(e.target.value);
      }}
    >
      <option value="repositories">Repositories</option>
      <option value="developers">Developers</option>
    </select>
  );
}
export default SearchFilterInput;
