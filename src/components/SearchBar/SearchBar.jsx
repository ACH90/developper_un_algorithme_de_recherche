/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import SearchIconButton from "../SearchIconButton/SearchIconButton";
import { data } from "../../dataLoader/dataLoader";

const SearchBar = ({ inputValue, setInputValue }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const recipes = data;
    console.log(recipes);
    console.log(datas);
    (recipes) => setDatas(recipes); // Mettre les données dans l'état
    console.log(inputValue);
  }, []); // Le tableau de dependances vide signifie que le composant sera monté une seule fois

  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    setInputValue(value); // Met à jour l'état lorsque l'utilisateur tape
  };

  console.log(inputValue);

  // Fonction pour effacer le texte de l'input
  const handleClear = () => {
    setInputValue(""); // Efface le texte de l'input quand on clique sur la croix
  };

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
      <div className="searchResults">
        <div className="searchResult">données</div>
      </div>
    </>
  );
};

export default SearchBar;
