import { filteredRecipes } from "./../components/Card/Card";

export const filterAndMapRecipesFrom2ndFilter = () => {
  console.log(
    "Voici les recettes filtrées de Card transférées dans 2ndFilter",
    filteredRecipes
  );
  //   return recipesMoreFiltered
  //     .filter(
  //       (recipe) =>
  //         recipe.name.toLowerCase().includes(filteredRecipes.toLowerCase()) ||
  //         recipe.description
  //           .toLowerCase()
  //           .includes(filteredRecipes.toLowerCase()) ||
  //         recipe.ingredients.some((ingredientObj) =>
  //           ingredientObj.ingredient
  //             .toLowerCase()
  //             .includes(filteredRecipes.toLowerCase())
  //         )
  //     )
  //     .map((recipe) => ({
  //       id: recipe.id,
  //       name: recipe.name,
  //       time: recipe.time,
  //       image: recipe.image,
  //       description: recipe.description,
  //       ingredients: recipe.ingredients,
  //     }));
};
