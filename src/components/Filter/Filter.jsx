/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { filterAndMapRecipes } from "../../utils/filterAndMapRecipes/filterAndMapRecipes";
import {
  deleteDuplicates,
  toggleMenu,
  clearSearch,
  removeTag,
  handleChange,
  handleSelect,
} from "./Filter_Utils";
import recipes from "../../data/recipes";

const Filter = ({
  inputValue,
  selectedIngredients,
  setSelectedIngredients,
  selectedAppliances,
  setSelectedAppliances,
  selectedUstensils,
  setSelectedUstensils,
}) => {
  const [isIngredientFilterOpen, setisIngredientFilterOpen] = useState(false);
  const [ingredientSearchFilter, setIngredientSearchFilter] = useState("");

  const [isApplianceFilterOpen, setisApplianceFilterOpen] = useState(false);
  const [applianceSearchFilter, setApplianceSearchFilter] = useState("");

  const [isUstensilsFilterOpen, setisUstensilsFilterOpen] = useState(false);
  const [ustensilsSearchFilter, setUstensilsSearchFilter] = useState("");

  const filteredRecipes = filterAndMapRecipes(
    recipes,
    inputValue,
    selectedIngredients,
    selectedAppliances,
    selectedUstensils
  );

  // Utiliser useEffect pour réagir aux changements d'état
  useEffect(() => {
    console.log("Options ingredients sélectionnées :", selectedIngredients);
  }, [selectedIngredients]);
  useEffect(() => {
    console.log("Options appliance sélectionnée :", selectedAppliances);
  }, [selectedAppliances]);
  useEffect(() => {
    console.log("Options ustensils sélectionnées :", selectedUstensils);
  }, [selectedUstensils]);

  // Extraire la liste des ingrédients en minuscule
  const ingredientsList = filteredRecipes.flatMap((recipe) =>
    recipe.ingredients.map((item) => item.ingredient.toLowerCase())
  );

  // Extraire la liste des appareils en minuscule
  const appliancesList = filteredRecipes.map((recipe) =>
    recipe.appliance.toLowerCase()
  );

  // Extraire la liste des ustensiles en minuscule
  const ustensilsList = filteredRecipes.flatMap((recipe) =>
    recipe.ustensils.map((ustensil) => ustensil.toLowerCase())
  );

  // Supprimer les doublons et exclure les ingrédients déjà sélectionnés
  const uniqueIngredients = deleteDuplicates(
    ingredientsList,
    selectedIngredients
  );

  // Supprimer les doublons et exclure les appareils déjà sélectionnés
  const uniqueAppliances = deleteDuplicates(appliancesList, selectedAppliances);

  // Supprimer les doublons et exclure les ustensiles déjà sélectionnés
  const uniqueUstensils = deleteDuplicates(ustensilsList, selectedUstensils);

  return (
    <div>
      <div className={styles.filterAndTagsContainer}>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            {/* Dropdown pour les ingrédients */}
            <div className={styles.filterDropdown}>
              <button
                className={styles.filterToggle}
                onClick={() =>
                  toggleMenu(
                    "food",
                    setisIngredientFilterOpen,
                    isIngredientFilterOpen
                  )
                }
              >
                Ingredients
              </button>
              {isIngredientFilterOpen && (
                <div className={styles.filterMenu}>
                  <div className={styles.searchInputContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      required
                      minLength={3}
                      autoComplete="off"
                      aria-label="Rechercher un aliment"
                      placeholder="Rechercher un aliment..."
                      value={ingredientSearchFilter}
                      onChange={(event) =>
                        handleChange(event, setIngredientSearchFilter)
                      }
                    />
                    {ingredientSearchFilter && (
                      <span
                        className={styles.clearIcon}
                        onClick={() => clearSearch(setIngredientSearchFilter)}
                      >
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
                        onClick={(event) =>
                          handleSelect(
                            event,
                            "food",
                            selectedIngredients,
                            setSelectedIngredients,
                            setisIngredientFilterOpen
                          )
                        }
                      >
                        {food}
                      </button>
                    ))}
                </div>
              )}
            </div>
            {/* Dropdown pour les appliances */}
            <div className={styles.filterDropdown}>
              <button
                className={styles.filterToggle}
                onClick={() =>
                  toggleMenu(
                    "appliance",
                    setisApplianceFilterOpen,
                    isApplianceFilterOpen
                  )
                }
              >
                Appareils
              </button>
              {isApplianceFilterOpen && (
                <div className={styles.filterMenu}>
                  <div className={styles.searchInputContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      required
                      minLength={3}
                      autoComplete="off"
                      aria-label="Rechercher un appareil"
                      placeholder="Rechercher un appareil..."
                      value={applianceSearchFilter}
                      onChange={(event) =>
                        handleChange(event, setApplianceSearchFilter)
                      }
                    />
                    {applianceSearchFilter && (
                      <span
                        className={styles.clearIcon}
                        onClick={() => clearSearch(setApplianceSearchFilter)}
                      >
                        &#x2715;
                      </span>
                    )}
                  </div>

                  {/* Liste des options */}
                  {uniqueAppliances
                    .filter((item) =>
                      item
                        .toLowerCase()
                        .includes(applianceSearchFilter.toLowerCase())
                    )
                    .map((food) => (
                      <button
                        key={food}
                        className={styles.optionButton}
                        onClick={(event) =>
                          handleSelect(
                            event,
                            "appliance",
                            selectedAppliances,
                            setSelectedAppliances,
                            setisApplianceFilterOpen
                          )
                        }
                      >
                        {food}
                      </button>
                    ))}
                </div>
              )}
            </div>
            {/* Dropdown pour les ustensiles */}
            <div className={styles.filterDropdown}>
              <button
                className={styles.filterToggle}
                onClick={() =>
                  toggleMenu(
                    "ustensils",
                    setisUstensilsFilterOpen,
                    isUstensilsFilterOpen
                  )
                }
              >
                Ustensils
              </button>
              {isUstensilsFilterOpen && (
                <div className={styles.filterMenu}>
                  <div className={styles.searchInputContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      required
                      minLength={3}
                      autoComplete="off"
                      aria-label="Rechercher un ustensil"
                      placeholder="Rechercher un ustensil..."
                      value={ustensilsSearchFilter}
                      onChange={(event) =>
                        handleChange(event, setUstensilsSearchFilter)
                      }
                    />
                    {ustensilsSearchFilter && (
                      <span
                        className={styles.clearIcon}
                        onClick={() => clearSearch(setUstensilsSearchFilter)}
                      >
                        &#x2715;
                      </span>
                    )}
                  </div>

                  {/* Liste des options */}
                  {uniqueUstensils
                    .filter((item) =>
                      item
                        .toLowerCase()
                        .includes(ustensilsSearchFilter.toLowerCase())
                    )
                    .map((food) => (
                      <button
                        key={food}
                        className={styles.optionButton}
                        onClick={(event) =>
                          handleSelect(
                            event,
                            "ustensils",
                            selectedUstensils,
                            setSelectedUstensils,
                            setisUstensilsFilterOpen
                          )
                        }
                      >
                        {food}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
          {/* Total des recettes */}
          <div className={styles.totalRecipes}>
            <p>{filteredRecipes.length} Recettes</p>
          </div>
        </div>
        {/* Liste des tags sélectionnés */}
        <div className={styles.selectedTags}>
          {selectedIngredients.map((ingredient) => (
            <div key={ingredient} className={styles.tag}>
              {ingredient}
              <button
                className={styles.removeTagButton}
                onClick={() =>
                  removeTag(
                    ingredient,
                    "food",
                    selectedIngredients,
                    setSelectedIngredients
                  )
                }
                aria-label={`Supprimer ${ingredient}`}
              >
                {" "}
                X
              </button>
            </div>
          ))}
          {selectedAppliances.map((appliance) => (
            <div key={appliance} className={styles.tag}>
              {appliance}
              <button
                className={styles.removeTagButton}
                onClick={() =>
                  removeTag(
                    appliance,
                    "appliance",
                    selectedAppliances,
                    setSelectedAppliances
                  )
                }
                aria-label={`Supprimer ${appliance}`}
              >
                X
              </button>
            </div>
          ))}
          {selectedUstensils.map((ustensil) => (
            <div key={ustensil} className={styles.tag}>
              {ustensil}
              <button
                className={styles.removeTagButton}
                onClick={() =>
                  removeTag(
                    ustensil,
                    "ustensils",
                    selectedUstensils,
                    setSelectedUstensils
                  )
                }
                aria-label={`Supprimer ${ustensil}`}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
