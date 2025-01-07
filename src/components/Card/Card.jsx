import style from "./Card.module.css";
import { data } from "../../dataLoader/dataLoader";
import { filterRecipesWithFor } from "./../../filterRecipesWithFor/filterRecipesWithFor";

// eslint-disable-next-line react/prop-types
const Card = ({ inputValue }) => {
  // Créer une copie du tableau de données
  const dataCopy = data.slice();

  // Filtrage avec une boucle for
  const filteredRecipes = filterRecipesWithFor(dataCopy, inputValue);

  // Mapping avec une boucle for
  const recipeCards = [];
  for (let i = 0; i < filteredRecipes.length; i++) {
    recipeCards.push(
      <div key={filteredRecipes[i].id} className={style.card}>
        <div className={style["card-item"]}>
          {/* Card-FirstPart */}
          <div>
            <div className={style["card-time"]}>
              <p>{filteredRecipes[i].time}min</p>
            </div>
            <div className={style["card-image"]}>
              <img
                src={`assets/Img_recipes/${filteredRecipes[i].image}`}
                alt={filteredRecipes[i].name}
              />
            </div>
          </div>
          {/* Card-SecondPart - Ingredients */}
          <div className={style["card-description"]}>
            <h3>{filteredRecipes[i].name}</h3>
            <div className={style["card-pt1"]}>
              <h4>RECETTE</h4>
              <p>{filteredRecipes[i].description}</p>
            </div>

            <div className={style["card-pt2"]}>
              <h4>INGREDIENTS</h4>
              <div>
                <ul className={style["card-ingredients"]}>
                  {filteredRecipes[i].ingredients.map((item, index) => (
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
    );
  }

  return <>{recipeCards}</>;
};

export default Card;
