import { useState } from "react";
import styles from "./Filter.module.css";
import { filterAndMapRecipes } from "../../filterAndMapRecipes/filterAndMapRecipes";
import { data } from "../../dataLoader/dataLoader";

// eslint-disable-next-line react/prop-types
const Filter = ({ inputValue }) => {
  const filteredRecipes = filterAndMapRecipes(data, inputValue);
  console.log(
    "Voici les recettes filtrées dans le composant Filter",
    filteredRecipes
  );
  console.log(
    "Voici le tableaud d'ingrédients dans les recettes filtrées",
    filteredRecipes.ingredients
  );

  const [selectedFood, setSelectedFood] = useState("Ingredients");
  const [selectedDevice, setSelectedDevice] = useState("Appareil");
  const [selectedUtensil, setSelectedUtensil] = useState("Ustensile");
  const [isFoodOpen, setIsFoodOpen] = useState(false);
  const [isDeviceOpen, setIsDeviceOpen] = useState(false);
  const [isUtensilOpen, setIsUtensilOpen] = useState(false);
  const [foodSearch, setFoodSearch] = useState(""); // Pour la recherche dans Aliments

  const toggleMenu = (menu) => {
    if (menu === "food") setIsFoodOpen(!isFoodOpen);
    if (menu === "device") setIsDeviceOpen(!isDeviceOpen);
    if (menu === "utensil") setIsUtensilOpen(!isUtensilOpen);
  };

  const handleSelect = (menu, option) => {
    if (menu === "food") setSelectedFood(option);
    if (menu === "device") setSelectedDevice(option);
    if (menu === "utensil") setSelectedUtensil(option);

    // Fermer le menu après sélection
    if (menu === "food") setIsFoodOpen(false);
    if (menu === "device") setIsDeviceOpen(false);
    if (menu === "utensil") setIsUtensilOpen(false);
  };

  const handleFoodSearchChange = (event) => {
    setFoodSearch(event.target.value);
  };

  const clearFoodSearch = () => {
    setFoodSearch(""); // Efface le texte de l'entrée de recherche
  };

  const ingredientsList = filteredRecipes.flatMap((recipe) =>
    recipe.ingredients.map((item) => item.ingredient)
  );

  // Supprimer les doublons (facultatif)
  const uniqueIngredients = [...new Set(ingredientsList)];

  console.log(uniqueIngredients);

  return (
    <div className={styles.filter}>
      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("food")}
        >
          {selectedFood}
        </button>
        {isFoodOpen && (
          <div className={styles.filterMenu}>
            <div className={styles.searchInputContainer}>
              <input
                type="text"
                className={styles.searchInput}
                aria-label="Search"
                // placeholder="Rechercher un aliment..."
                value={foodSearch}
                onChange={handleFoodSearchChange}
              />
              {foodSearch && (
                <span className={styles.clearIcon} onClick={clearFoodSearch}>
                  &#x2715; {/* Icône "X" */}
                </span>
              )}
              <img src="./Ellipse4.png" alt="Search Logo" />
            </div>

            {uniqueIngredients.map((food) => (
              <button
                key={food}
                className={styles.optionButton}
                onClick={() => handleSelect("food", food)}
              >
                {food}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterDropdown}>
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
      </div>
    </div>
  );
};

export default Filter;
