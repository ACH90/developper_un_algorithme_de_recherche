import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import SearchIconButton from "../SearchIconButton/SearchIconButton";
import { data } from "../../dataLoader/dataLoader";

const recipes = data;
const SearchBar = () => {
  const [inputValue, setInputValue] = useState([]); // Déclarer l'état

  useEffect(() => {
    console.log("inputValue:", inputValue); // Afficher la valeur de l'input dans la console
  }, [inputValue]);

  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    setInputValue(event.target.value); // Met à jour l'état lorsque l'utilisateur tape
  };

  // Fonction pour effacer le texte de l'input
  const handleClear = () => {
    setInputValue(""); // Efface le texte de l'input quand on clique sur la croix
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          className={styles.searchInput}
          placeholder="Rechercher une recette, un ingrédient..."
          aria-label="Search"
          value={inputValue} // Lier l'état à la valeur de l'input
          onChange={handleChange} // Utiliser la fonction handleChange pour chaque changement de l'input
        />
        <div className={styles.clearIconContainer}>
          {/* Afficher la croix pour effacer le champ si du texte est entré */}
          {inputValue && (
            <span className={styles.clearIcon} onClick={handleClear}>
              &#x2715; {/* Croix */}
            </span>
          )}
        </div>

        <div className={styles.searchIconButtonContainer}>
          <SearchIconButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
