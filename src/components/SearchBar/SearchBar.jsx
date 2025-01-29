/* eslint-disable react/prop-types */

import styles from "./SearchBar.module.css";
import { useState } from "react";
import { handleChange, handleClear } from "./SearchBar_Utils";

const SearchBar = ({ inputValue, setInputValue }) => {
  const [inputQuery, setInputQuery] = useState("");

  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className={styles.searchInput}
            placeholder="Rechercher une recette, un ingrédient..."
            aria-label="Search"
            value={inputQuery} // Lier l'état à la valeur de l'input
            onChange={(event) =>
              handleChange(event, setInputQuery, setInputValue)
            } // Utiliser la fonction handleChange pour chaque changement de l'input
          />
          <div className={styles.clearIconContainer}>
            {/* Afficher la croix pour effacer le champ si du texte est entré */}
            {inputValue && (
              <span
                className={styles.clearIcon}
                onClick={() => handleClear(setInputQuery, setInputValue)}
              >
                &#x2715; {/* Croix */}
              </span>
            )}
          </div>

          <div className={styles.searchIconButtonContainer}>
            <button className={styles.searchIconButton}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
