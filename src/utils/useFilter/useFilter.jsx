import { useState, useEffect } from "react";
import { data } from "../../dataLoader/dataLoader";
// import recipes from "../../data/recipes";

const useFilter = () => {
  const [searchInput, setSearchInput] = useState(""); // Valeur de l'input
  const [inputValue, setInputValue] = useState(""); // Valeur pour filtrer
  const [filteredRecipes, setFilteredRecipes] = useState(data); // Valeur initiale avec toutes les recettes

  console.log("Voila les recettes :", filteredRecipes);
  const recipes = filteredRecipes;
  // filteredRecipes.map((recipe) => ({
  //   id: recipe.id,
  //   name: recipe.name,
  //   time: recipe.time,
  //   image: recipe.image,
  //   description: recipe.description,
  //   ingredients: recipe.ingredients,
  // }));

  console.log("la aussi!!", recipes);
  // Met à jour filteredRecipes chaque fois que inputValue change
  useEffect(() => {
    if (inputValue.length > 2) {
      // Applique le filtrage si inputValue contient plus de 2 caractères
      const results = data.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          recipe.description.toLowerCase().includes(inputValue.toLowerCase()) ||
          recipe.ingredients.some((ingredientObj) =>
            ingredientObj.ingredient
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          )
      );
      setFilteredRecipes(results); // Mettez à jour l'état avec les recettes filtrées
    } else {
      setFilteredRecipes(data); // Si moins de 3 caractères, on retourne toutes les recettes
    }
  }, [inputValue]); // Met à jour chaque fois que inputValue change

  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchInput(value); // Met à jour searchInput
    console.log(value);

    setInputValue(value); // Mette à jour inputValue directement
  };

  // Fonction pour effacer le texte de l'input
  const handleClear = () => {
    setInputValue(""); // Réinitialise inputValue
    setSearchInput(""); // Réinitialise searchInput
  };

  return {
    searchInput,
    setSearchInput,
    inputValue,
    setInputValue,
    handleChange,
    handleClear,
    filteredRecipes, // Retourne les recettes filtrées
  };
};

export default useFilter;
