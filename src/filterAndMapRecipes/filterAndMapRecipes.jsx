// Fonction pour filtrer et mapper les recettes
export const filterAndMapRecipes = (
  recipes,
  inputValue = "",
  selectedIngredients = [], // Assurez-vous que c'est un tableau
  selectedAppliances = "",
  selectedUstensils = []
) => {
  if (!Array.isArray(selectedIngredients)) {
    console.error(
      "selectedIngredients n'est pas un tableau :",
      selectedIngredients
    );
    selectedIngredients = [];
  }

  return recipes
    .filter((recipe) => {
      // Vérifie si le nom, la description ou un ingrédient correspond à la recherche
      const matchesInputValue =
        recipe.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        );

      // Vérifie si tous les ingrédients sélectionnés sont présents dans la recette
      const matchesSelectedIngredients =
        selectedIngredients.length === 0 || // Aucun filtre si la liste est vide
        selectedIngredients.every((selectedIngredient) =>
          recipe.ingredients.some((ingredientObj) =>
            ingredientObj.ingredient
              .toLowerCase()
              .includes(selectedIngredient.toLowerCase())
          )
        );

      // Vérifie si tous les appareils sélectionnés sont présents dans la recette
      const matchesSelectedAppliances =
        selectedAppliances.length === 0 || // Pas de filtre si aucun appareil sélectionné
        selectedAppliances.every((appliance) =>
          recipe.appliance.toLowerCase().includes(appliance.toLowerCase())
        );

      // Vérifie si tous les ustensiles sélectionnés sont présents dans la recette
      const matchesSelectedUstensils =
        selectedUstensils.length === 0 || // Pas de filtre si aucun ustensile sélectionné
        selectedUstensils.every((ustensil) =>
          recipe.ustensils.some((ust) =>
            ust.toLowerCase().includes(ustensil.toLowerCase())
          )
        );

      // Retourne vrai uniquement si tous les filtres sont satisfaits
      return (
        matchesInputValue &&
        matchesSelectedIngredients &&
        matchesSelectedAppliances &&
        matchesSelectedUstensils
      );
    })
    .map((recipe) => ({
      id: recipe.id,
      name: recipe.name,
      time: recipe.time,
      image: recipe.image,
      description: recipe.description,
      ingredients: recipe.ingredients,
      appliance: recipe.appliance,
      ustensils: recipe.ustensils,
    }));
};
