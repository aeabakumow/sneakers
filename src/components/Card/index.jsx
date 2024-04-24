import React from "react";
import stylesCard from "./Card.module.scss";

console.log(stylesCard);

function Card({ title, imageUrl, price, onClickFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickplus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite} onClick={onClickFavorite}>
        <img src="src\assets\heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <img
          className={stylesCard.plus}
          onClick={onClickplus}
          src={
            isAdded ? "src/assets/btn-checked.svg" : "src/assets/btn-plus.svg"
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
