// Fonction pour filtrer et mapper les recettes
export const filterAndMapRecipesFrom2ndFilter = (
  recipes,
  inputValueFiltered
) => {
  return recipes
    .filter(
      (recipe) =>
        recipe.ustensils.includes(inputValueFiltered) ||
        recipes.appliance.includes(inputValueFiltered)
    )
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
