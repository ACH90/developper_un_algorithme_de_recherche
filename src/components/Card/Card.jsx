import style from "./Card.module.css";
import { data } from "../../dataLoader/dataLoader";

// import ingredients from "../../data/recipes";

// console.log(data);

// const recipe = data;
// const imageElement = document.createElement("img");

// imageElement.src = recipe.image;
// eslint-disable-next-line react/prop-types
const Card = ({ inputValue }) => {
  return (
    <>
      {data
        .filter((recipe) =>
          recipe.name.toLocaleLowerCase().includes(inputValue)
        )
        .map((recipe) => (
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
                              {/* Verifie si il y a une quantité.Si oui,affiche la quantité si non "" rien */}
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
