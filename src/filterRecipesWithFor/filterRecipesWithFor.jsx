export function filterRecipesWithFor(data, inputValue) {
  const filteredRecipes = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase().includes(inputValue.toLowerCase())) {
      filteredRecipes.push(data[i]);
    }
  }
  return filteredRecipes;
}
