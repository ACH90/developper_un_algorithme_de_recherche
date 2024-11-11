import "./SearchBar.css";
import SearchIconButton from "../SearchIconButton/SearchIconButton";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher une recette, un ingrédient..."
          aria-label="Search"
        />
        <div className="search-icon-button-container">
          <SearchIconButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
