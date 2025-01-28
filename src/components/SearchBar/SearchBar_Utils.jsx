// Fonction de gestion du changement dans l'input
export const handleChange = (event, setInputValue) => {
  let value = event.target.value;
  setInputValue(value);
};

// Fonction pour effacer le texte de l'input
export const handleClear = (setInputValue) => {
  setInputValue("");
};
