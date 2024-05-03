import React from "react";
import stylesCard from "./Card.module.scss";



function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "src/assets/heart-liked.svg" : "src/assets/heart-unliked.svg"}
          alt="unliked"
        />
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
          onClick={onClickPlus}
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
