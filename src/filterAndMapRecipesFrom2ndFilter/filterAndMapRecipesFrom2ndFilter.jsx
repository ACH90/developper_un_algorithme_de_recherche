export const filterAndMapRecipesFrom2ndFilter = (
  filteredRecipes,
  recipesMoreFiltered
) => {
  return recipesMoreFiltered
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(filteredRecipes.toLowerCase()) ||
        recipe.description
          .toLowerCase()
          .includes(filteredRecipes.toLowerCase()) ||
        recipe.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(filteredRecipes.toLowerCase())
        )
    )
    .map((recipe) => ({
      id: recipe.id,
      name: recipe.name,
      time: recipe.time,
      image: recipe.image,
      description: recipe.description,
      ingredients: recipe.ingredients,
    }));
};
