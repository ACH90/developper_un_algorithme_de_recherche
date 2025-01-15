// Fonction pour filtrer et mapper les recettes
export const filterAndMapRecipes = (
  recipes,
  inputValue,
  selectedIngredient
) => {
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

      // Vérifie si un ingrédient spécifique est sélectionné et présent dans la recette
      const matchesSelectedIngredient =
        !selectedIngredient || // Pas de filtre si aucun ingrédient sélectionné
        recipe.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(selectedIngredient.toLowerCase())
        );

      return matchesInputValue && matchesSelectedIngredient;
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
