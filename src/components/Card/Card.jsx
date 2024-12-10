import style from "./Card.module.css";
const Card = () => {
  return (
    <div>
      <div className={style.card}>
        <div className={style["card-image"]}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image description"
          />
        </div>
        <div className={style["card-description"]}>
          <h3>Titre de la carte</h3>
          <p>
            Ceci est une description courte pour la carte. Ajoutez ici les
            détails nécessaires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
