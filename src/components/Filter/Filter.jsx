import { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [selectedFood, setSelectedFood] = useState("Aliment");
  const [selectedDevice, setSelectedDevice] = useState("Appareil");
  const [selectedUtensil, setSelectedUtensil] = useState("Ustensile");
  const [isFoodOpen, setIsFoodOpen] = useState(false);
  const [isDeviceOpen, setIsDeviceOpen] = useState(false);
  const [isUtensilOpen, setIsUtensilOpen] = useState(false);
  const [foodSearch, setFoodSearch] = useState(""); // Pour la recherche dans Aliments

  const toggleMenu = (menu) => {
    if (menu === "food") setIsFoodOpen(!isFoodOpen);
    if (menu === "device") setIsDeviceOpen(!isDeviceOpen);
    if (menu === "utensil") setIsUtensilOpen(!isUtensilOpen);
  };

  const handleSelect = (menu, option) => {
    if (menu === "food") setSelectedFood(option);
    if (menu === "device") setSelectedDevice(option);
    if (menu === "utensil") setSelectedUtensil(option);

    // Fermer le menu après sélection
    if (menu === "food") setIsFoodOpen(false);
    if (menu === "device") setIsDeviceOpen(false);
    if (menu === "utensil") setIsUtensilOpen(false);
  };

  const handleFoodSearchChange = (event) => {
    setFoodSearch(event.target.value);
  };

  const filteredFoodOptions = ["Fruits", "Légumes", "Viandes"].filter((food) =>
    food.toLowerCase().includes(foodSearch.toLowerCase())
  );

  return (
    <div className={styles.filter}>
      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("food")}
        >
          {selectedFood}
        </button>
        {isFoodOpen && (
          <div className={styles.filterMenu}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Rechercher un aliment..."
              value={foodSearch}
              onChange={handleFoodSearchChange}
            />
            {filteredFoodOptions.map((food) => (
              <button
                key={food}
                className={styles.optionButton}
                onClick={() => handleSelect("food", food)}
              >
                {food}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("device")}
        >
          {selectedDevice}
        </button>
        {isDeviceOpen && (
          <div className={styles.filterMenu}>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Four")}
            >
              Four
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Blender")}
            >
              Blender
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("device", "Micro-ondes")}
            >
              Micro-ondes
            </button>
          </div>
        )}
      </div>

      <div className={styles.filterDropdown}>
        <button
          className={styles.filterToggle}
          onClick={() => toggleMenu("utensil")}
        >
          {selectedUtensil}
        </button>
        {isUtensilOpen && (
          <div className={styles.filterMenu}>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Couteau")}
            >
              Couteau
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Cuillère")}
            >
              Cuillère
            </button>
            <button
              className={styles.optionButton}
              onClick={() => handleSelect("utensil", "Fouet")}
            >
              Fouet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
