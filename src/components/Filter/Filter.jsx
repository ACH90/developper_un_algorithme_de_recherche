/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Filter.module.css";
import { filterAndMapRecipes } from "../../filterAndMapRecipes/filterAndMapRecipes";
import { data } from "../../dataLoader/dataLoader";

const Filter = ({ inputValue, foodSearch, setFoodSearch }) => {
  const [isIngredientFilterOpen, setisIngredientFilterOpen] = useState(false);
  const [ingredientSearchFilter, setIngredientSearchFilter] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const filteredRecipes = filterAndMapRecipes(data, inputValue, foodSearch);

  const toggleMenu = (dropdown) => {
    if (dropdown === "food") setisIngredientFilterOpen(!isIngredientFilterOpen);
  };

  const handleSelect = (event, dropdown) => {
    if (!event.target) {
      console.error("Événement sans cible valide :", event);
      return;
    }
    const optionSelected = event.target.textContent;

    // Ajouter l'ingrédient sélectionné à la liste des tags
    if (!selectedIngredients.includes(optionSelected)) {
      setSelectedIngredients([...selectedIngredients, optionSelected]);
      setFoodSearch(optionSelected);
    }

    // Fermer le menu après sélection
    if (dropdown === "food") setisIngredientFilterOpen(false);
  };

  const handleChange = (event) => {
    const ingredientInputSearch = event.target.value;
    setIngredientSearchFilter(ingredientInputSearch);
  };

  const clearSearch = () => {
    setIngredientSearchFilter("");
  };

  const removeTag = (ingredient) => {
    // Supprimer l'ingrédient des tags sélectionnés
    const updatedTags = selectedIngredients.filter((tag) => tag !== ingredient);
    setSelectedIngredients(updatedTags);

    // Effacer la recherche associée
    setFoodSearch("");
  };

  // Extraire la liste des ingrédients
  const ingredientsList = filteredRecipes.flatMap((recipe) =>
    recipe.ingredients.map((item) => item.ingredient)
  );

  // Supprimer les doublons et exclure les ingrédients déjà sélectionnés
  const uniqueIngredients = [...new Set(ingredientsList)].filter(
    (ingredient) => !selectedIngredients.includes(ingredient)
  );

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        {/* Dropdown pour les ingrédients */}
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
                  aria-label="Rechercher un aliment"
                  placeholder="Rechercher un aliment..."
                  value={ingredientSearchFilter}
                  onChange={handleChange}
                />
                {ingredientSearchFilter && (
                  <span className={styles.clearIcon} onClick={clearSearch}>
                    &#x2715;
                  </span>
                )}
              </div>

              {/* Liste des options */}
              {uniqueIngredients
                .filter((item) =>
                  item
                    .toLowerCase()
                    .includes(ingredientSearchFilter.toLowerCase())
                )
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
      </div>
      {/* Liste des tags sélectionnés */}
      <div className={styles.selectedTags}>
        {selectedIngredients.map((ingredient) => (
          <div key={ingredient} className={styles.tag}>
            {ingredient}
            <button
              className={styles.removeTagButton}
              onClick={() => removeTag(ingredient)}
              aria-label={`Supprimer ${ingredient}`}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
