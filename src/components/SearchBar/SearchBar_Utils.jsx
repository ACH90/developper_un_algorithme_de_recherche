// Fonction de gestion du changement dans l'input
export const handleChange = (event, setInputQuery, setInputValue) => {
  let value = event.target.value;
  setInputQuery(value);

  if (value.length > 2) {
    setInputValue(value);
  }
};

// Fonction pour effacer le texte de l'input
export const handleClear = (setInputQuery, setInputValue) => {
  setInputQuery("");
  setInputValue("");
};
