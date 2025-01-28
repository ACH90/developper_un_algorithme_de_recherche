export const deleteDuplicates = (listValues, selectedValues) => {
  return [...new Set(listValues.map((item) => item.toLowerCase()))].filter(
    (value) => !selectedValues.includes(value.toLowerCase())
  );
};

export const toggleMenu = (dropdown, setIsOptionOpen, isOptionOpen) => {
  if (dropdown === "food") setIsOptionOpen(!isOptionOpen);
  if (dropdown === "appliance") setIsOptionOpen(!isOptionOpen);
  if (dropdown === "ustensils") setIsOptionOpen(!isOptionOpen);
};

export const handleSelect = (
  event,
  dropdown,
  selectedDropdown,
  setSelectedDropdown,
  setIsOptionOpen
) => {
  if (!event.target) {
    console.error("Événement sans cible valide :", event);
    return;
  }
  const optionSelected = event.target.textContent;

  // Ajouter l'option sélectionnée uniquement à la catégorie appropriée
  if (dropdown === "food" && !selectedDropdown.includes(optionSelected)) {
    setSelectedDropdown([...selectedDropdown, optionSelected]);
  } else if (
    dropdown === "appliance" &&
    !selectedDropdown.includes(optionSelected)
  ) {
    setSelectedDropdown([...selectedDropdown, optionSelected]);
  } else if (
    dropdown === "ustensils" &&
    !selectedDropdown.includes(optionSelected)
  ) {
    setSelectedDropdown([...selectedDropdown, optionSelected]);
  }

  // Fermer le menu après sélection
  if (dropdown === "food") {
    setIsOptionOpen(false);
  } else if (dropdown === "appliance") {
    setIsOptionOpen(false);
  } else if (dropdown === "ustensils") {
    setIsOptionOpen(false);
  }

  console.log("Options ingredient sélectionnée :", selectedDropdown);
  console.log("Options appliance sélectionnée :", selectedDropdown);
  console.log("Options ustensils sélectionnées :", selectedDropdown);
};

export const clearSearch = (
  setIngredientSearchFilter,
  setApplianceSearchFilter,
  setUstensilsSearchFilter
) => {
  setIngredientSearchFilter("");
  setApplianceSearchFilter("");
  setUstensilsSearchFilter("");
};

export const removeTag2 = (tag, category, setInputSearchFilter) => {
  if (category === category) {
    setInputSearchFilter((prev) => prev.filter((item) => item !== tag.value));
  }
};

export const removeTag = (
  tag,
  category,
  selectedDropdown,
  setSelectedDropdown
) => {
  if (category === "food") {
    const updatedTags = selectedDropdown.filter((item) => item !== tag);
    setSelectedDropdown(updatedTags);
    if (updatedTags.length === 0) setSelectedDropdown([]); // Si aucun ingrédient n'est sélectionné
  }

  if (category === "appliance") {
    const updatedTags = selectedDropdown.filter((item) => item !== tag);
    setSelectedDropdown(updatedTags);
    if (updatedTags.length === 0) setSelectedDropdown([]); // Si aucun ingrédient n'est sélectionné
  }

  if (category === "ustensils") {
    const updatedTags = selectedDropdown.filter((item) => item !== tag);
    setSelectedDropdown(updatedTags);
    if (updatedTags.length === 0) setSelectedDropdown([]); // Si aucun ingrédient n'est sélectionné
  }
};
