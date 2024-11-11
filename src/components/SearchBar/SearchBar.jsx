import { useState } from "react";
import "./SearchBar.css";
import SearchIconButton from "../SearchIconButton/SearchIconButton";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(""); // Déclarer l'état

  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    setInputValue(event.target.value); // Met à jour l'état lorsque l'utilisateur tape
  };

  // Fonction pour effacer le texte de l'input
  const handleClear = () => {
    setInputValue(""); // Efface le texte de l'input quand on clique sur la croix
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher une recette, un ingrédient..."
          aria-label="Search"
          value={inputValue} // Lier l'état à la valeur de l'input
          onChange={handleChange} // Utiliser la fonction handleChange pour chaque changement de l'input
        />
        <div className="clear-icon-container">
          {/* Afficher la croix pour effacer le champ si du texte est entré */}
          {inputValue && (
            <span className="clear-icon" onClick={handleClear}>
              &#x2715; {/* Croix */}
            </span>
          )}
        </div>

        <div className="search-icon-button-container">
          <SearchIconButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
