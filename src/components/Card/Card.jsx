/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { filterAndMapRecipes } from "./../..//utils/filterAndMapRecipes/filterAndMapRecipes";
import recipes from "../../data/recipes";

// eslint-disable-next-line react/prop-types
const Card = ({
  inputValue,
  selectedIngredients,
  selectedAppliances,
  selectedUstensils,
}) => {
  // eslint-disable-next-line no-undef
  const filteredRecipes = filterAndMapRecipes(
    recipes,
    inputValue,
    selectedIngredients,
    selectedAppliances,
    selectedUstensils
  );

  console.log("Voici les filteredRecipes de Card", filteredRecipes);

  return (
    <>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className={style.card}>
          <div className={style["card-item"]}>
            {/* Card-FirstPart */}
            <div>
              <div className={style["card-time"]}>
                <p>{recipe.time}min</p>
              </div>
              <div className={style["card-image"]}>
                <img
                  src={`assets/Img_recipes/${recipe.image}`}
                  alt={recipe.name}
                />
              </div>
            </div>
            {/* Card-SecondPart - Ingredients*/}
            <div className={style["card-description"]}>
              <h3>{recipe.name}</h3>
              <div className={style["card-pt1"]}>
                <h4>RECETTE</h4>
                <p>{recipe.description}</p>
              </div>

              <div className={style["card-pt2"]}>
                <h4>INGREDIENTS</h4>
                <div>
                  <ul className={style["card-ingredients"]}>
                    {recipe.ingredients.map((item, index) => (
                      <li key={index}>
                        <div className={style["card-ingredients-item"]}>
                          <h5>{item.ingredient}</h5>
                          <p>
                            {item.quantity ? `${item.quantity}` : ""}
                            {item.unit ? ` ${item.unit}` : ""}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
