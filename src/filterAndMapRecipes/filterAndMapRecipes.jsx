// Fonction pour filtrer et mapper les recettes
export const filterAndMapRecipes = (recipes, inputValue) => {
  return recipes
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(inputValue.toLowerCase())
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
