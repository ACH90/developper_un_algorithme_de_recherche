import { useState } from "react";
import styles from "./Filter.module.css";
import { filterAndMapRecipes } from "../../filterAndMapRecipes/filterAndMapRecipes";
import { data } from "../../dataLoader/dataLoader";

// eslint-disable-next-line react/prop-types
const Filter = ({ inputValue, foodSearch, setFoodSearch }) => {
  // const [selectedFood] = useState("Ingredients");
  const [isIngredientFilterOpen, setisIngredientFilterOpen] = useState(false);
  // Pour la recherche dans Aliments
  // const [foodSearch, setFoodSearch] = useState("");

  const filteredRecipes = filterAndMapRecipes(data, inputValue, foodSearch);
  console.log(
    "Voici les recettes filtrées finales dans le composant Filter",
    filteredRecipes
  );

  const toggleMenu = (dropdown) => {
    if (dropdown === "food") setisIngredientFilterOpen(!isIngredientFilterOpen);
  };

  const handleSelect = (event, dropdown) => {
    // Vérifiez si event.target existe
    if (!event.target) {
      console.error("Événement sans cible valide :", event);
      return;
    }
    const optionSelected = event.target.textContent;

    // Mettre à jour l'état du filtre
    setFoodSearch(optionSelected);
    // if (option.includes("Appareil")) setSelectedDevice(option);
    // if (option.includes("Ustensile")) setSelectedUtensil(option);

    // Fermer le menu après sélection
    if (dropdown === "food") setisIngredientFilterOpen(false);

    // Effacer le texte de l'input de recherche
    if (dropdown === "food") clearSearch();

    console.log("Voici l'option choisie", optionSelected); // Affiche l'option choisie
  };

  console.log("Voici l'input de recherche foodSearch", foodSearch);

  const handleChange = (event) => {
    const ingredientInputSearch = event.target.value; // Utiliser directement la valeur de l'input
    setFoodSearch(ingredientInputSearch); // Met à jour l'état
    console.log(
      "Voici l'ingredient recherché dans le filtre",
      ingredientInputSearch
    ); // Log la valeur immédiate
    console.log("Voici l'input de recherche foodSearch", foodSearch);
  };

  //Effacer le texte de l'entrée de recherche
  const clearSearch = () => {
    setFoodSearch("");
  };

  // Extraire la liste des ingrediens
  const ingredientsList = filteredRecipes.flatMap((recipe) =>
    recipe.ingredients.map((item) => item.ingredient)
  );

  // Supprimer les doublons (facultatif)
  const uniqueIngredients = [...new Set(ingredientsList)];

  console.log(
    "Voici la liste des ingredients sans doublons",
    uniqueIngredients
  );

  return (
    <div className={styles.filter}>
      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("food")}
        >
          Ingredients
        </button>
        {isIngredientFilterOpen && (
          <div className={styles.filterMenu}>
            <div className={styles.searchInputContainer}>
              <input
                type="text"
                className={styles.searchInput}
                aria-label="Search"
                placeholder="Rechercher un aliment..."
                value={foodSearch}
                onChange={handleChange}
              />
              {foodSearch && (
                <span className={styles.clearIcon} onClick={clearSearch}>
                  &#x2715; {/* Icône "X" */}
                </span>
              )}
              <img src="./assets/Ellipse4.png" alt="Search Logo" />
            </div>

            {uniqueIngredients
              .filter((item) => item.includes(foodSearch))
              .map((food) => (
                <button
                  key={food}
                  className={styles.optionButton}
                  onClick={(event) => handleSelect(event, "food")}
                >
                  {food}
                </button>
              ))}
          </div>
        )}
      </div>

      {/* <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("device")}
        >
          {selectedDevice}
        </button>
        {isDeviceOpen && (
          <div className={styles.filterMenu}>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Four")}
            >
              Four
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Blender")}
            >
              Blender
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Micro-ondes")}
            >
              Micro-ondes
            </button>
          </div>
        )}
      </div>

      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("utensil")}
        >
          {selectedUtensil}
        </button>
        {isUtensilOpen && (
          <div className={styles.filterMenu}>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Couteau")}
            >
              Couteau
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Cuillère")}
            >
              Cuillère
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Fouet")}
            >
              Fouet
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Filter;
