import { useState, useEffect } from "react";
import { data } from "./../dataLoader/dataLoader";

const useFilter = () => {
  const [inputValue, setInputValue] = useState(""); // Gère la valeur de l'input
  const [searchInput, setSearchInput] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(data);

  console.log("Data from dataLoader: ", data);
  console.log("Filtered Recipes dans useFilter: ", filteredRecipes);

  // Filtrage des recettes sans le `map` pour l'instant
  const filterRecipes = (recipes, inputValue) => {
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        recipe.ingredients.some((ingredientObj) =>
          ingredientObj.ingredient
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        )
    );
  };

  useEffect(() => {
    const updatedRecipes = filterRecipes(data, inputValue);
    setFilteredRecipes(updatedRecipes);
  }, [inputValue]); // Mise à jour quand `inputValue` change

  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    const value = event.target.value; // Récupère la valeur actuelle
    setSearchInput(value); // Met à jour searchInput
    // Utilise `value` au lieu de `searchInput` pour évaluer la condition
    if (value.length > 2) {
      setInputValue(value); // Met à jour inputValue si plus de deux caractères
    } else {
      setInputValue(value); // Réinitialise inputValue si moins de deux caractères
    }
    console.log("Current value: ", value);
  };

  // Fonction pour effacer le texte de l'input
  const handleClear = () => {
    setInputValue(""); // Efface le texte de l'input quand on clique sur la croix
    setSearchInput("");
  };

  // Retourner un objet avec toutes les valeurs nécessaires
  return {
    filteredRecipes,
    inputValue,
    setInputValue,
    searchInput,
    setSearchInput,
    handleChange,
    handleClear,
  };
};

export default useFilter;
