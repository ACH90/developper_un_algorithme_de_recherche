/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import { filterAndMapRecipes } from "../../filterAndMapRecipes/filterAndMapRecipes";
import { data } from "../../dataLoader/dataLoader";

const Filter = ({
  inputValue,
  // foodSearch,
  // setFoodSearch,
  // applianceSearch,
  // setApplianceSearch,
  // ustensilsSearch,
  // setUstensilsSearch,
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
    data,
    inputValue,
    // foodSearch,
    selectedIngredients,
    selectedAppliances,
    selectedUstensils
    // applianceSearch,
    // ustensilsSearch
  );

  const toggleMenu = (dropdown) => {
    if (dropdown === "food") setisIngredientFilterOpen(!isIngredientFilterOpen);
    if (dropdown === "appliance")
      setisApplianceFilterOpen(!isApplianceFilterOpen);
    if (dropdown === "ustensils")
      setisUstensilsFilterOpen(!isUstensilsFilterOpen);
  };

  const handleSelect = (event, dropdown) => {
    if (!event.target) {
      console.error("Événement sans cible valide :", event);
      return;
    }
    const optionSelected = event.target.textContent;

    // Ajouter l'option sélectionnée uniquement à la catégorie appropriée
    if (dropdown === "food" && !selectedIngredients.includes(optionSelected)) {
      setSelectedIngredients([...selectedIngredients, optionSelected]);
      // setFoodSearch([optionSelected]);
    } else if (
      dropdown === "appliance" &&
      !selectedAppliances.includes(optionSelected)
    ) {
      setSelectedAppliances([...selectedAppliances, optionSelected]);
      // setApplianceSearch([optionSelected]);
    } else if (
      dropdown === "ustensils" &&
      !selectedUstensils.includes(optionSelected)
    ) {
      setSelectedUstensils([...selectedUstensils, optionSelected]);
      // setUstensilsSearch([optionSelected]);
    }

    // Fermer le menu après sélection
    if (dropdown === "food") {
      setisIngredientFilterOpen(false);
    } else if (dropdown === "appliance") {
      setisApplianceFilterOpen(false);
    } else if (dropdown === "ustensils") {
      setisUstensilsFilterOpen(false);
    }

    console.log("Options ingredient sélectionnée :", selectedIngredients);
    console.log("Options appliance sélectionnée :", selectedAppliances);
    console.log("Options ustensils sélectionnées :", selectedUstensils);
  };

  // Utiliser useEffect pour réagir aux changements d'état
  useEffect(() => {
    console.log("Options ingredients sélectionnées :", selectedIngredients);
  }, [selectedIngredients]);
  // console.log("Type de foodSearch :", typeof foodSearch);
  // console.log("foodsearch", foodSearch);
  useEffect(() => {
    console.log("Options appliance sélectionnée :", selectedAppliances);
  }, [selectedAppliances]);
  // console.log("Type de applianceSearch :", typeof applianceSearch);
  useEffect(() => {
    console.log("Options ustensils sélectionnées :", selectedUstensils);
  }, [selectedUstensils]);
  console.log("Type de ustensilsSearch :", typeof ustensilsSearch);
  const handleChange = (event, setSearchFilter) => {
    const inputSearch = event.target.value;
    setSearchFilter(inputSearch);
  };

  const clearSearch = () => {
    setIngredientSearchFilter("");
    setApplianceSearchFilter("");
    setUstensilsSearchFilter("");
  };

  const removeTag = (tag, category) => {
    if (category === "food") {
      const updatedTags = selectedIngredients.filter((item) => item !== tag);
      setSelectedIngredients(updatedTags);
      if (updatedTags.length === 0) setSelectedIngredients([]); // Si aucun ingrédient n'est sélectionné
    } else if (category === "appliance") {
      const updatedTags = selectedAppliances.filter((item) => item !== tag);
      setSelectedAppliances(updatedTags);
      if (updatedTags.length === 0) setSelectedAppliances([]);
    } else if (category === "ustensils") {
      const updatedTags = selectedUstensils.filter((item) => item !== tag);
      setSelectedUstensils(updatedTags);
      if (updatedTags.length === 0) setSelectedUstensils([]);
    }
  };

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

  const deleteDuplicates = (listValues, selectedValues) => {
    return [...new Set(listValues.map((item) => item.toLowerCase()))].filter(
      (value) => !selectedValues.includes(value.toLowerCase())
    );
  };

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
                      onChange={(event) =>
                        handleChange(event, setIngredientSearchFilter)
                      }
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
            {/* Dropdown pour les appliances */}
            <div className={styles.filterDropdown}>
              <button
                className={styles.filterToggle}
                onClick={() => toggleMenu("appliance")}
              >
                Appareils
              </button>
              {isApplianceFilterOpen && (
                <div className={styles.filterMenu}>
                  <div className={styles.searchInputContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      aria-label="Rechercher un appareil"
                      placeholder="Rechercher un appareil..."
                      value={applianceSearchFilter}
                      onChange={(event) =>
                        handleChange(event, setApplianceSearchFilter)
                      }
                    />
                    {applianceSearchFilter && (
                      <span className={styles.clearIcon} onClick={clearSearch}>
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
                        onClick={(event) => handleSelect(event, "appliance")}
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
                onClick={() => toggleMenu("ustensils")}
              >
                Ustensils
              </button>
              {isUstensilsFilterOpen && (
                <div className={styles.filterMenu}>
                  <div className={styles.searchInputContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      aria-label="Rechercher un ustensil"
                      placeholder="Rechercher un ustensil..."
                      value={ustensilsSearchFilter}
                      onChange={(event) =>
                        handleChange(event, setUstensilsSearchFilter)
                      }
                    />
                    {ustensilsSearchFilter && (
                      <span className={styles.clearIcon} onClick={clearSearch}>
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
                        onClick={(event) => handleSelect(event, "ustensils")}
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
                onClick={() => removeTag(ingredient, "food")}
                aria-label={`Supprimer ${ingredient}`}
              >
                X
              </button>
            </div>
          ))}
          {selectedAppliances.map((appliance) => (
            <div key={appliance} className={styles.tag}>
              {appliance}
              <button
                className={styles.removeTagButton}
                onClick={() => removeTag(appliance, "appliance")}
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
                onClick={() => removeTag(ustensil, "ustensils")}
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
