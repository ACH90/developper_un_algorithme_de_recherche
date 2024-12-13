import style from "./Card.module.css";
import { data } from "../../dataLoader/dataLoader";
// import ingredients from "../../data/recipes";

// console.log(data);

// const recipe = data;
// const imageElement = document.createElement("img");

// imageElement.src = recipe.image;
const Card = () => {
  return (
    <>
      {data.map((recipe) => (
        <div key={recipe.id} className={style.card}>
          <div className={style["card-item"]}>
            {/* Card-FirstPart */}
            <div>
              <div className={style["card-time"]}>
                <p>{recipe.time}min</p>
              </div>
              <div className={style["card-image"]}>
                <img
                  src={`/src/assets/Img_recipes/${recipe.image}`}
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
                        {item.ingredient}
                        {item.quantity ? `: ${item.quantity}` : ""}
                        {item.unit ? ` ${item.unit}` : ""}
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
