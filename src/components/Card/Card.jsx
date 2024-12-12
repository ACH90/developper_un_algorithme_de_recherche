import style from "./Card.module.css";
import { data } from "../../dataLoader/dataLoader";

console.log(data);

// const recipe = data;
// const imageElement = document.createElement("img");

// imageElement.src = recipe.image;
const Card = () => {
  return (
    <div className={style.card}>
      {data.map((recipe) => (
        <div key={recipe.id} className={style["card-item"]}>
          <div className={style["card-image"]}>
            <img
              src={`/src/assets/Img_recipes/${recipe.image}`}
              alt={recipe.name}
            />
          </div>
          <div className={style["card-description"]}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
