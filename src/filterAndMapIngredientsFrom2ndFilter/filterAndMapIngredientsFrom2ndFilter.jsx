// Fonction pour filtrer et mapper les recettes
export const filterAndMapIngredientsFrom2ndFilter = (
  ingredients,
  inputValue,
  selectedIngredient,
  selectedAppliance,
  selectedUstensils
) => {
  return ingredients
    .filter((ingredient) => {
      // Vérifie si le nom, la description ou un ingrédient correspond à la recherche
      const matchesInputValue =
        ingredient.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        ingredient.description
          .toLowerCase()
          .includes(inputValue.toLowerCase()) ||
        ingredient.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        );

      // Vérifie si un ingrédient spécifique est sélectionné et présent dans la recette
      const matchesSelectedIngredient =
        !selectedIngredient || // Pas de filtre si aucun ingrédient sélectionné
        ingredient.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(selectedIngredient.toLowerCase())
        );

      const matchesSelectedAppliance =
        !selectedAppliance || // Pas de filtre si aucun appareil sélectionné
        ingredient.appliance
          .toLowerCase()
          .includes(selectedAppliance.toLowerCase());

      const matchesSelectedUstensils =
        !selectedUstensils || // Pas de filtre si aucun ustensile sélectionné
        ingredient.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(selectedUstensils.toLowerCase())
        );

      return (
        matchesInputValue &&
        matchesSelectedIngredient &&
        matchesSelectedAppliance &&
        matchesSelectedUstensils
      );
    })
    .map((recipe) => ({
      ingredients: recipe.ingredients,
      appliance: recipe.appliance,
      ustensils: recipe.ustensils,
    }));
};
