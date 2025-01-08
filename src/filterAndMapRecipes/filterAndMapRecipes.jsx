// Fonction pour filtrer et mapper les recettes
const filterAndMapRecipes = (recipes, inputValue) => {
  return recipes
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(inputValue.toLowerCase())
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

export default filterAndMapRecipes;
